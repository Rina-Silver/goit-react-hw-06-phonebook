import { useSelector, useDispatch } from 'react-redux';
import { onChangeFilter } from 'redux/contacts/contacts-actions';
import { v4 as uuidv4 } from 'uuid';
import './Filter.scss';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const inputNameId = uuidv4();

  return (
    <>
      <label htmlFor={inputNameId}>Find name</label>
      <input
        id={inputNameId}
        name={filter}
        type="text"
        value={filter}
        onChange={e => dispatch(onChangeFilter(e.target.value.trim()))}
        className="inputFilter"
      ></input>
    </>
  );
};

export default Filter;
