import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

const initialState = {
   contacts: JSON.parse(localStorage.getItem('users')) || [],
   contact: {},
   isLoading: false,
   errorMessage: null,
   searchValue: '',
   fitleredContacts: [],
}
export const getContacts = createAsyncThunk(
   'contacts/getContacts',
   async (_, { rejectWithValue }) => {
      try {
         const contacts = await fetchApi({
            path: 'users',
            method: 'GET',
         })
         return contacts
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const contactSlice = createSlice({
   name: 'contacts',
   initialState,
   reducers: {
      getOneContact(state, action) {
         state.contact = action.payload
      },
      deleteContact(state, action) {
         state.contacts = state.contacts.filter(
            (el) => el.id !== action.payload
         )
      },
      searchContact(state, action) {
         state.searchValue = action.payload
      },
      editContact(state, action) {
         state.contacts = state.contacts.map((el) => {
            if (el.id === action.payload.id) {
               return { ...action.payload }
            }
            return el
         })
         state.contact = action.payload
      },
   },
   extraReducers: {
      [getContacts.pending]: (state) => {
         state.isLoading = true
      },
      [getContacts.fulfilled]: (state, action) => {
         state.isLoading = false
         state.contacts = action.payload
      },
      [getContacts.pending]: (state, action) => {
         state.isLoading = false
         state.errorMessage = action.payload
      },
   },
})
export const contactsActions = contactSlice.actions
export default contactSlice
