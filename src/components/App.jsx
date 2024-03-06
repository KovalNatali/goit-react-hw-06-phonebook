import { AddContastForm } from './AddContastForm/AddContastForm';
import { Container } from '@mui/material';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container maxWidth="xl">
      <h1>Phonebook</h1>
      <AddContastForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
};
