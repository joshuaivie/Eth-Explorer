import { Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchTransaction } from '../redux/search/search';
import { ChevronLeftIcon, MicrophoneIcon, CogIcon } from './Icons';

function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const TransactionBlock = 'Transaction Details';

  const style = {
    backgroundColor: '#4369b2',
  };

  const handleSearch = (e) => {
    dispatch(searchTransaction(e.target.value.trim()));
  };

  return (
    <Navbar style={style} className="py-2 px-4 d-flex justify-content-between align-center">
      <button
        type="button"
        className="m-0 previous-page bg-transparent text-white h4 align-center backChevron icon"
        onClick={() => history.goBack()}
      >
        <ChevronLeftIcon />
      </button>
      {pathname === '/' && (
        <div className="search-bar">
          <input
            className="bg-transparent font-lato form-control text-center text-white border-0"
            name="search-input"
            id="search-input"
            placeholder="Search Transaction Block..."
            onChange={handleSearch}
          />
        </div>
      )}
      {pathname.includes('transaction') && (
        <h6 className="text-white m-0 font-lato">
          {TransactionBlock}
        </h6>
      )}
      <div className="moreButtons m-0 previous-page bg-transparent text-white h6 align-center d-flex gap-4 icon">
        <MicrophoneIcon />
        <CogIcon />
      </div>
    </Navbar>
  );
}

export default NavBar;
