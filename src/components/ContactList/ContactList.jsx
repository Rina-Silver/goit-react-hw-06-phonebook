import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import ContactItem from './ContactItem';
import './ContactList.scss';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return contacts.length > 0 ? (
    <ul className="nameList">
      {contacts.map(({ id, name, number }) => (
        <li className="nameItem" key={id}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  ) : (
    <>
      <p>No contacts</p>
    </>
  );
};

export default ContactList;
