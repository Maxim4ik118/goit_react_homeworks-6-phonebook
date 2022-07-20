import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Filter, ContactList, Section, ContactForm } from './components';
import { useEffect } from 'react';

const INITIAL_CONTACTS_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS_LIST);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // if (!!localStorage.getItem('contacts')) {
    //   setContacts(JSON.parse(localStorage.getItem('contacts')));
    // }
  }, []);

  useEffect(() => {
    // TODO: Fix
    // localStorage.setItem(
    //   'contacts',
    //   JSON.stringify(contacts)
    // );


    console.log('contacts updated');
  }, [contacts]);

  const handleAddContact = newContactData => {
    const newContactEntity = {
      id: nanoid(),
      ...newContactData,
    };

    if (!checkNewContactPresence(newContactEntity.name)) {
      setContacts(prevState => [...prevState, newContactEntity]);
      localStorage.setItem(
        'contacts',
        JSON.stringify([...contacts, newContactEntity])
      );
    } else {
      alert(`${newContactEntity.name} is already in contacts!`);
    }
  };

  const handleDeleteContact = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);

    setContacts(newContacts);
    localStorage.setItem(
      'contacts',
      JSON.stringify(newContacts)
    );
  };

  const handleFilterContactsByName = ({ target: { value } }) => {
    setFilter(value);
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const contactsFilteredByName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <Section title="Phonebook">
        <ContactForm addContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChange={handleFilterContactsByName} />
        <ContactList
          contacts={contactsFilteredByName}
          filter={filter}
          onDelete={handleDeleteContact}
        />
      </Section>
    </div>
  );
};

export default App;
