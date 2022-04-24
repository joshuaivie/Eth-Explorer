import PropTypes from 'prop-types';
import { EthereumIcon } from './Icons';

function KeyStatsCard({ Title, Subtitle }) {
  return (
    <div className="d-flex align-center justify-content-center p-4 icon-large p-5">
      <EthereumIcon />
      <div className="d-grid align-content-center ms-3 w-50">
        <h2 className="text-white fw-bold text-start font-lato">{Title}</h2>
        <p className="text-white text-start">
          {Subtitle}
        </p>
      </div>
    </div>
  );
}

KeyStatsCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string.isRequired,
};

export default KeyStatsCard;
