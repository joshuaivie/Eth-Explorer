import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path="/transactions/:transactionID"><Transaction /></Route>
        <Route path="/"><Homepage /></Route>
      </Switch>
    </div>
  );
}

export default App;
