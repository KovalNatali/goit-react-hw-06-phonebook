import { TextField, Button } from '@mui/material';
import { Form, Label } from './AddContactForm.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const AddContastForm = ({ addContast }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handalCange = e => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'number' && setNumber(e.target.value);
  };
  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        addContast({ id: nanoid(5), name, number });
        setName('');
        setNumber('');
      }}
    >
      <Label> Name</Label>
      <TextField
        onChange={handalCange}
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        label="Name"
        variant="outlined"
        value={name}
      />

      <Label> Number</Label>

      <TextField
        onChange={handalCange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        label="Number"
        variant="outlined"
        value={number}
      />
      <Button type="submit" variant="outlined">
        Add contact
      </Button>
    </Form>
  );
};
