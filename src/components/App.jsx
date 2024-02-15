import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
} from '../components/redux/contacts/contacts-slice';
import { setFilter } from './redux/filter/filter-slice';
import { getFilterContacts } from './redux/contacts/contacts-selector';
import { AddContastForm } from './AddContastForm/AddContastForm';
import { Container } from '@mui/material';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();

  const onAddContact = newContact => {
    const isExist = contacts.find(contact => {
      return newContact.name === contact.name;
    });
    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const action = addContact(newContact);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container maxWidth="xl">
      <h1>Phonebook</h1>
      <AddContastForm addContast={onAddContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleChange} />
      <ContactsList contacts={contacts} onDeleteContact={onDeleteContact} />
    </Container>
  );
};
