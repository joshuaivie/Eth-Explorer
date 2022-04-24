import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '../pages/Homepage';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';
import { GET_TRANSACTIONS } from '../redux/transaction/transaction';

const transactionData = [
  {
    blockHash: '0xe52eef674bd7f6957576ad08820fcd7392b7d32ba414d3cacb0aff932b0e0b2a',
    blockNumber: '14645562',
    confirmations: '1',
    contractAddress: '',
    cumulativeGasUsed: '10934672',
    from: '0x28c6c06298d514db089934071355e5743bf21d60',
    gas: '207128',
    gasPrice: '22021658052',
    gasUsed: '21000',
    hash: '0xe49350b0753ef9bd9c52aa9c3f053315ea62ee65e63f9b413603ac6963ad2320',
    input: '0x',
    isError: '0',
    nonce: '3791991',
    timeStamp: '1650777536',
    to: '0x742b5f5fd0c3d32ca23d0bce4095ca652723a549',
    transactionIndex: '137',
    txreceipt_status: '1',
    value: '518400000000000000',
  },
];

function Jsx() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Homepage />
      </Provider>
    </BrowserRouter>
  );
}

const renderCreate = () => renderer.create(Jsx()).toJSON();

const mockCountries = () => {
  render(Jsx());
};

describe('Test Homepage', () => {
  store.dispatch({ type: GET_TRANSACTIONS, payload: transactionData });

  it('Check if the page loads', () => {
    mockCountries();
    const tree = renderCreate();
    expect(screen.getByText(/207128/i)).toBeInTheDocument();
    expect(screen.getByText(/21000/i)).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });

  it('Check if search bar is loading', () => {
    mockCountries();
    const tree = renderCreate();
    fireEvent.change(screen.getByPlaceholderText('Search Transaction Block...'), { target: { value: '14645562' } });
    expect(screen.queryByText(/14645562/i)).toBeInTheDocument();
    expect(screen.queryByText(/14645555/i)).not.toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });

  it('Check if search bar is loading', () => {
    mockCountries();
    const tree = renderCreate();
    fireEvent.change(screen.getByPlaceholderText('Search Transaction Block...'), { target: { value: 'brazil' } });
    expect(screen.queryByText(/Brazil/i)).toBeInTheDocument();
    expect(screen.queryByText(/US/i)).not.toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
