import React, {useState} from 'react'
import ChatScreen from './components/Screens/ChatScreen/ChatScreen.jsx'
import { Route, Routes } from 'react-router'
import ContactScreen from './components/Screens/ContactScreen/ContactScreen.jsx'

const App = () => {

	return (
		<div className="whatsapp-container">
			<Routes>
				<Route
					path='/'
					element={<ContactScreen/>}
				/>
			
				<Route 
					path='/contact/:contact_id/messages' 
					element={<ChatScreen/>} 
				/>

			</Routes>
		</div>
	)
}






export default App