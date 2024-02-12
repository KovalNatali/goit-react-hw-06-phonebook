import React, { useState, useEffect } from 'react';
import { AddContastForm } from './AddContastForm/AddContastForm';
import { Container } from '@mui/material';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacs = localStorage.getItem(`contacts`);
    if (savedContacs !== null) {
      JSON.parse(savedContacs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isExist = contacts.find(contact => {
      return newContact.name === contact.name;
    });
    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(
      prevContacts => [...prevContacts, { id: nanoid(), ...newContact }]
      // contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    );
  };

  const handleDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    // this.setState(prevState => ({contacts: prevState.contacts.filter((contact) => contact.id!== id) }))
  };

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Container maxWidth="xl">
      <h1>Phonebook</h1>
      <AddContastForm addContast={addContact} contactsList={contacts} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactsList
        contacts={getFilterContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};
