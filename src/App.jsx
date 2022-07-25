import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilterTerm } from 'redux/phonebookActions';

import { Filter, ContactList, Section, ContactForm } from './components';

// const INITIAL_CONTACTS_LIST = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filterTerm = useSelector(state => state.phonebook.filter);

  const handleAddContact = newContactData => {
    const newContactEntity = {
      ...newContactData,
    };

    if (!checkNewContactPresence(newContactEntity.name)) {
      dispatch(addContact(newContactEntity));
    } else {
      alert(`${newContactEntity.name} is already in contacts!`);
    }
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const contactsFilteredByName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Section title="Phonebook">
        <ContactForm addContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filterTerm} onChange={handleFilterContactsByName} />
        <ContactList
          contacts={contactsFilteredByName}
          filter={filterTerm}
          onDelete={handleDeleteContact}
        />
      </Section>
    </div>
  );
};

export default App;
