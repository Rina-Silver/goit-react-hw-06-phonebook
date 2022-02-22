import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Filter.scss';

const Filter = ({ filter, filtered }) => {
  const inputNameId = uuidv4();
  return (
    <>
      <label htmlFor={inputNameId}>Find name</label>
      <input
        id={inputNameId}
        name={filter}
        type="text"
        value={filter}
        onChange={filtered}
        className="inputFilter"
      ></input>{' '}
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filtered: PropTypes.func.isRequired,
};

export default Filter;
