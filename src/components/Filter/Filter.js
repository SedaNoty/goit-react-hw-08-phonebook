import { useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const value = e.currentTarget.value;
    dispatch(filter(value));
  };
  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          name="name"
          onChange={e => {
            changeFilter(e);
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter a search name"
        />
      </label>
    </>
  );
};
