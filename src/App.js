import Contacts from './components/contacts/Contacts'
import Header from './layout/Header'
import Notification from './components/UI/notification/Notification'

function App() {
	return (
		<div className='App'>
			<Header />
			<Contacts />
			<Notification />
		</div>
	)
}

export default App
