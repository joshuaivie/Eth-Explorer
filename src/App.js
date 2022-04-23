import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import Transaction from './pages/Transaction';

// Components
import Navbar from './components/Navbar';

// Dispatch Actions
import { GetTransactions } from './redux/transaction/transaction';

// Main Functional Component
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTransactions({ order: 'asc' }));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/transactions/:transactionID" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
