import React from "react"
import Message from "../Message/Message"

const MessagesList = ({ messages, deleteMessageById }) => {

	if( messages.length === 0 ){
		return <div style={{textAlign: 'center', color: '#8696a0', padding: '20px'}}>Aún no tienes mensajes!</div>
	}
	
	const lista_mensajes = messages.map(
		function (message) {
			return <Message 
				key={message.id}
				emisor={message.emisor} 
				hora={message.hora} 
				id={message.id} 
				texto={message.texto} 
				status={message.status}
				deleteMessageById={deleteMessageById}
			/>
		}
	)
	
	return (
		<>
			{lista_mensajes}
		</>
	)
}
export default MessagesList