export const getAllContacts = store => store.contacts;

export const getFilterContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(({ title, author }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    return (
      normalizedAuthor.includes(normalizedFilter) ||
      normalizedTitle.includes(normalizedFilter)
    );
  });

  return filteredContacts;
};
