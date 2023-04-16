import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getStateContacts, getStateFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contactsList = useSelector(getStateContacts);
  const filterValue = useSelector(getStateFilter);
  const dispatch = useDispatch();

  const getFilterContact = () => {
    if (filterValue === '') {
      return contactsList;
    }
    const normalizedFilter = filterValue.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = getFilterContact();

  return (
    <ul>
      {filterContacts?.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}:{number}
          <button
            type="submit"
            className={css.button_del}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
