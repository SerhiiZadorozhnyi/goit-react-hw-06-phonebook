import { combineReducers } from "redux";
import { addContact, deleteContact, changeFilter } from "./contact-action";
import { createReducer } from "@reduxjs/toolkit";

const contactTest = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contact = createReducer(contactTest, {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => 
        state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    contact,
    filter,
});