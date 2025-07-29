import React, { useEffect } from 'react'
import ChatScreen from './components/Screens/ChatScreen/ChatScreen.jsx'
import { Route, Routes, useLocation } from 'react-router'
import ContactScreen from './components/Screens/ContactScreen/ContactScreen.jsx'

const App = () => {
	const location = useLocation();

	
	useEffect(() => {
		const container = document.querySelector('.whatsapp-container');
		if (container) {
			if (location.pathname.includes('/messages') && window.innerWidth <= 768) {
				container.classList.add('mobile-chat-view');
			} else {
				container.classList.remove('mobile-chat-view');
			}
		}
	}, [location.pathname]);

	
	useEffect(() => {
		const handleResize = () => {
			const container = document.querySelector('.whatsapp-container');
			if (container) {
				if (window.innerWidth > 768) {
					container.classList.remove('mobile-chat-view');
				} else if (location.pathname.includes('/messages')) {
					container.classList.add('mobile-chat-view');
				}
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [location.pathname]);

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