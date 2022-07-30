import contactSlice from './contacts-slice'

const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
	reducer: {
		contact: contactSlice.reducer,
	},
})
export default store
