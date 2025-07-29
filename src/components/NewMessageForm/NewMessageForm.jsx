import React from 'react'
import './NewMessageForm.css'

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        if (new_message_text.trim()) {
            //Llamos a la funcion de agregar nuevo mensaje
            addNewMessage(new_message_text)
            //Reseteamos el campo
            event.target.message.value = ''
        }
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm} style={{display: 'flex', width: '100%', gap: '10px', alignItems: 'center'}}>
            <input 
                type="text" 
                placeholder='Escribe un mensaje...' 
                id='message' 
                name='message' 
                required 
                className="message-input"
            />
            <button type='submit' className="send-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m1.101 21.757 20.617-9.757-20.617-9.757v7.72l14.709 2.037-14.709 2.037z"/>
                </svg>
            </button>
        </form>
    )
}

export {NewMessageForm}