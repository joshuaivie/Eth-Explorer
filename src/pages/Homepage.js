import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearSearch } from '../redux/search/search';

import KeyStatsCard from '../components/KeyStatsCard';
import Order from '../components/Order';
import TransactionCard from '../components/TransactionCard';

function Countries() {
  const dispatch = useDispatch();

  const { transactions, search } = useSelector((state) => state);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [keyStats, setKeyStats] = useState({ title: '', subtitle: '' });

  const filterSearched = (value) => {
    setFilteredTransactions(transactions.transactions);

    if (value !== '') {
      setFilteredTransactions(() => transactions.transactions.filter(
        (transaction) => transaction.blockNumber.toLowerCase().includes(value.toLowerCase()),
      ));
    } else {
      setFilteredTransactions(transactions.transactions);
      dispatch(clearSearch());
    }
  };

  useEffect(() => filterSearched(search), [transactions, search]);

  useEffect(() => setFilteredTransactions(transactions.transactions), []);

  useEffect(() => {
    if (transactions.transactions.length > 0) {
      const totalValue = transactions.transactions
        .reduce((a, b) => a + parseInt(b.value, 10), 0).toLocaleString();
      setKeyStats({ title: 'Binance 14 Ethereum', subtitle: `ETH ${totalValue} Total Value` });
    }
  }, [transactions]);

  return (
    <>
      <KeyStatsCard Title={keyStats.title} Subtitle={keyStats.subtitle} />
      <Order />
      <ul className="cards">
        {filteredTransactions.map((transaction) => (
          <TransactionCard
            TransactionHash={transaction.hash}
            TransactionValue={transaction.value}
            BlockNumber={transaction.blockNumber}
            DestinationAddress={transaction.to}
            key={transaction.hash}
            Data={transaction}
          />
        ))}
      </ul>
    </>
  );
}

export default Countries;
