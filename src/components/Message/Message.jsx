import React, { useState } from 'react'
const Message = ({emisor, hora, id, texto, status, deleteMessageById}) => {

	
	const [message_selected, setMessageSelected] = useState(false)

	const handleChangeMessageSelected = (e) => {
		e.preventDefault()
		setMessageSelected(true)
	}

	const isMyMessage = emisor === 'YO'
	
	return (
		<div 
			className={`message ${isMyMessage ? 'sent' : 'received'}`}
			onContextMenu={handleChangeMessageSelected}
		>
			<div className="message-content">
				<p>{texto}</p>
			</div>
			<div className="message-meta">
				<span className="message-time">{hora}</span>
				{isMyMessage && (
					<span className="message-status">
						{status === 'visto' ? '✓✓' : '✓'}
					</span>
				)}
			</div>
			{
				message_selected && (
					<button 
						onClick={() => {deleteMessageById(id)}}
						style={{
							position: 'absolute',
							top: '-10px',
							right: '-10px',
							backgroundColor: '#f44336',
							color: 'white',
							border: 'none',
							borderRadius: '50%',
							width: '20px',
							height: '20px',
							fontSize: '12px',
							cursor: 'pointer'
						}}
					>
						×
					</button>
				)
			}
		</div>
	)
}
export default Message