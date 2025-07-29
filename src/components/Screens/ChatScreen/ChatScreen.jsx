import React, { useState } from 'react'
import MessagesList from '../../MessagesList/MessagesList'
import {NewMessageForm} from '../../NewMessageForm/NewMessageForm'
import { useParams, useNavigate } from 'react-router'
import { getContactById, getContactList } from '../../../services/contactService'
import ContactList from '../../ContactList/ContactList'
import { useEffect } from 'react';


const ChatScreen = () => {
	const navigate = useNavigate();
	
	const {contact_id} = useParams()

	
	const contact_selected = getContactById(contact_id)
	const contacts = getContactList()

	const [messages, setMessages] = useState([]);

useEffect(() => {
  const contact_selected = getContactById(contact_id);
  setMessages(contact_selected.messages);
}, [contact_id]);

	const handleBackClick = () => {
		navigate('/');
	};
    

	const deleteMessageById = (message_id) => {
		const new_message_list = []
		for(const message of messages){
			if(message.id !== message_id){
				new_message_list.push(message)
			}
		} 
		setMessages(new_message_list)
	}

	const addNewMessage = (text) => {
		const now = new Date();
		const hora = now.toLocaleTimeString('es-AR', {
            hour: '2-digit',
            minute: '2-digit'
        });

		
		const new_mesage = {
		
			emisor: 'YO',
			hora: hora , //Investigar acerca de Date.
			texto: text,
			status: 'no-visto',
			id: messages.length + 1
		}
		const cloned_messages_list = [...messages]
		cloned_messages_list.push(new_mesage)
		setMessages(cloned_messages_list)
	}

	const deleteAllMessages = () => {
				setMessages([])
		 	}

	
    return (
        <>
			<div className="contacts-sidebar">
				<div className="contacts-header">
					<h1>Chats</h1>
				</div>
				<div className="contacts-list">
					<ContactList contacts={contacts} />
				</div>
			</div>
			<div className="chat-container">
				<div className="chat-header">
					<button 
						className="back-button mobile-only"
						onClick={handleBackClick}
						aria-label="Volver a la lista de chats"
					>
						<i className="bi bi-arrow-left"></i>
					</button>
					<div className="chat-header-info">
						<img 
							src={contact_selected.avatar} 
							alt={contact_selected.name}
							className="chat-header-avatar"
							onError={(e) => {
								e.target.src = `https://ui-avatars.com/api/?name=${contact_selected.name}&background=6b7c85&color=fff&size=40`;
							}}
						/>
						<div className="chat-header-details">
							<h2>{contact_selected.name}</h2>
							<span>{contact_selected.connectionStatus === 'online' ? 'En línea' : `Última vez: ${contact_selected.lastConnection}`}</span>
						</div>
					</div>
					{
						messages.length > 0
						&&
						<button onClick={deleteAllMessages} style={{padding: '8px 12px', backgroundColor: '#667781', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
							Borrar chat
						</button>
					}
				</div>

				<div className="messages-container">
					<MessagesList messages={messages} deleteMessageById={deleteMessageById} />
				</div>

				<div className="message-input-container">
					<NewMessageForm addNewMessage={addNewMessage}/>
				</div>
			</div>
		</>
    )
}



export default ChatScreen