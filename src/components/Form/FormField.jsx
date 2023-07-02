import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';



const ErrorNameMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const ErrorNumberMessage =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
const Regex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      ErrorNameMessage
    )
    .required(),
  number: Yup.string().matches(Regex, ErrorNumberMessage).required(),
});



const FormField = () => {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
console.log(contacts);





const setNewContact = (newContact)=> {
  const isMatch = contacts.find(contact => contact.name === newContact.name || contact.number === newContact.number)
    
       if (isMatch) { 
         alert(`${newContact.name} is alredy in contacts`);
         return;
       }
        dispatch(addContact(newContact));

      };


  return <div className="flex flex-col gap-2">
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, { resetForm }) => {
        setNewContact({ id: nanoid(), ...values });

        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off" >
        <div className='space-y-3'>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <Field
          id="name"
          name="name"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your name"
        />
        <ErrorMessage name="name" component="div" className='text-red-500' />
        <label htmlFor="number"
        className="block text-sm font-medium text-gray-700">Number</label>
        <Field id="number" name="number" type="tel"
         className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
         placeholder="Enter number" />
        <ErrorMessage name="number" component="div" className='text-red-500' />
        </div>
        <button type="submit"
         className="inline-flex items-center px-5 py-2 mt-6 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </Form>
    </Formik>
  </div>;
};

export default FormField;

