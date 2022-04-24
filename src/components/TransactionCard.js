import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ArrowCircleRightIcon } from './Icons';

function TransactionCard({
  TransactionHash, TransactionValue, BlockNumber, DestinationAddress, Data,
}) {
  const history = useHistory();
  const navigate = () => {
    history.push({ pathname: `/transactions/${TransactionHash}`, state: { ...Data } });
  };
  return (
    <li className="card transaction-card p-3">
      <div
        onKeyPress={() => navigate()}
        role="button"
        onClick={() => navigate()}
        tabIndex={0}
        className="text-white"
      >
        <div className="text-end mb-5 icon">
          <ArrowCircleRightIcon />
        </div>
        <div className="stats">
          <h3 className="font-lato fw-bold text-end mt-5">
            Block
            {' '}
            {BlockNumber}
          </h3>
          <p className="text-end m-0">
            ETH
            {' '}
            {parseInt(TransactionValue, 10).toLocaleString()}
            {' '}
            Value
          </p>
          <p className="text-end m-0">
            Destination Address:
            {' '}
            {DestinationAddress}
          </p>
        </div>
      </div>
    </li>
  );
}

TransactionCard.propTypes = {
  TransactionHash: PropTypes.string.isRequired,
  TransactionValue: PropTypes.string.isRequired,
  BlockNumber: PropTypes.string.isRequired,
  DestinationAddress: PropTypes.string.isRequired,
  Data: PropTypes.shape().isRequired,
};

export default TransactionCard;
