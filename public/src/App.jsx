// import '../index.css';
import React from 'react';
import ContactList from './components/ContactList/ContactList';
import FormField from './components/Form/FormField';
import Filter from './components/Filter/Filter';


export default function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-600">Phonebook</h1>
      <FormField />
      <h2 className="text-2xl font-bold text-center text-indigo-600">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}


