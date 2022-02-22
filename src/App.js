import { useState, useEffect } from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkNameInBook = name => {
    return contacts.find(contact => contact.name === name);
  };

  const formSubmitHandler = data => {
    if (checkNameInBook(data.name)) {
      alert(`${data.name} is already in Contactbook!`);
      return;
    }
    // console.log(data);
    const newContact = {
      id: uuidv4(),
      ...data,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value.trim());
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getVisibleContacts();

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div className="Container">
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} filtered={onChangeFilter} />
        <ContactList contacts={filteredContacts} onDelete={removeContact} />
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     console.log('App componentDidMount');

//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('App componentDidUpdate');
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       console.log('Обновилось поле contacts, записываю contacts в хранилище');
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   checkNameInBook = name => {
//     const { contacts } = this.state;
//     return contacts.find(contact => contact.name === name);
//   };

//   formSubmitHandler = data => {
//     if (this.checkNameInBook(data.name)) {
//       alert(`${data.name} is already in Contactbook!`);
//       return;
//     }
//     // console.log(data);
//     const newContact = {
//       id: uuidv4(),
//       ...data,
//     };

//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   };

//   onChangeFilter = e => {
//     const { value } = e.currentTarget;
//     this.setState({ filter: value.trim() });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   removeContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     //    const normalizedFilter = filter.toLowerCase();
//     //    const filteredContacts = contacts.filter(({ name }) =>
//     //      name.toLowerCase().includes(normalizedFilter),
//     //    );
//     const filteredContacts = this.getVisibleContacts();

//     return (
//       <div className="Container">
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.formSubmitHandler} />
//         </Section>
//         <Section title="Contacts">
//           <Filter filter={filter} filtered={this.onChangeFilter} />
//           <ContactList
//             contacts={filteredContacts}
//             onDelete={this.removeContact}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
