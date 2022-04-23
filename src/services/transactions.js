const BASE_URL = 'https://api.etherscan.io/';
const API_KEY = 'DA3ZRYZTTEMZK52BMWA8RDU9HR8THCBAKY';
const DEFAULT_ADDRESS = '0x28C6c06298d514Db089934071355E5743bf21d60​';
const DEFAULT_ORDER = 'asc';
const DEFAULT_PAGE = '1';
const DEFAULT_PAGE_SIZE = '20';
const DEFAULT_BLOCK_START = '0';
const DEFAULT_BLOCK_END = '99999999';

export default function FetchTransactions({
  walletAddress = DEFAULT_ADDRESS,
  order = DEFAULT_ORDER,
  page = DEFAULT_PAGE,
  blockStart = DEFAULT_BLOCK_START,
  blockEnd = DEFAULT_BLOCK_END,
}) {
  const url = `${BASE_URL}
  ?module=account
  &action=txlist
  &address=${walletAddress}
  &startblock=${blockStart}
  &endblock=${blockEnd}
  &page=${page}
  &offset=${DEFAULT_PAGE_SIZE}
  &sort=${order}
  &apikey=${API_KEY}`;
  const data = fetch(url)
    .then((res) => res.json().then((json) => {
      const { result, status } = json;

      if (status === 1) {
        return result;
      }
      throw Error('We could not find any transactions');
    }))
    .catch((error) => error);
  return data;
}
