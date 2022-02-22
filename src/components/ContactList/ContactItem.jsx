import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p>
        🙂{name} 📞{number}
      </p>
      <button
        type="button"
        onClick={() => onDelete(id)}
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
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
