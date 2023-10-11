import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

  export default function ContactForm() {

    const dispatch = useDispatch();

    const handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.target;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      dispatch(addContact(name, number));
      form.reset();
    };
    
    return (
    
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.form}>
        Name
        <input
          type="text"
          name="name"
          autoComplete='off'
          required
        />
      </label>

      <label className={css.form}>
        Number
        <input
          type="tel"
          name="number"
          required
        />
      </label>
      <button className={css.add} type="submit">
        Add contact
      </button>
    </form>
  );
};

