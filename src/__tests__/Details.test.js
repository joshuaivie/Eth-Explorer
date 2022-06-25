import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Transaction from '../pages/Transaction';
import store from '../redux/configureStore';

function Jsx() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Transaction />
      </Provider>
    </BrowserRouter>
  );
}

const renderCreate = () => renderer.create(Jsx()).toJSON();

const mockCountries = () => {
  render(Jsx());
};

describe('Test Details page', () => {
  it('Check if the page loads', () => {
    mockCountries();
    const tree = renderCreate();
    expect(screen.getByText(/Block Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirmations/i)).toBeInTheDocument();
    expect(screen.getByText(/Gas Used/i)).toBeInTheDocument();
    expect(screen.getByText(/Gas/i)).toBeInTheDocument();
    expect(screen.getByText(/Timestamp/i)).toBeInTheDocument();
    expect(screen.getByText(/Target Address/i)).toBeInTheDocument();
    expect(tree).toMatchSnapshot();
  });
});
