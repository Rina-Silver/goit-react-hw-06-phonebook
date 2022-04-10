import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contacts-actions';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>
        🙂{name} 📞{number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(removeContact(id))}
        className="Contact__btn"
      >
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
