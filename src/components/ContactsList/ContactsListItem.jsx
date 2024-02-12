import React from 'react';

export const ContactsListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name} : {number}{' '}
      </p>
      <button onClick={onDeleteContact}>Delete</button>
    </li>
  );
};
