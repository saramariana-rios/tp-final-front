import React from 'react';
import { Link } from 'react-router';

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`} className="contact-item">
            <img 
                src={contact.avatar} 
                alt={contact.name} 
                className="contact-avatar"
                onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${contact.name}&background=6b7c85&color=fff&size=49`;
                }}
            />
            <div className="contact-info">
                <h2 className="contact-name">{contact.name}</h2>
                <span className="contact-description">{contact.description}</span>
            </div>
            <div className="contact-meta">
                <span className="contact-time">{contact.lastConnection}</span>
                <span className={`contact-status ${contact.connectionStatus}`}>
                    {contact.connectionStatus === 'online' ? 'En línea' : 'Desconectado'}
                </span>
            </div>
        </Link>
    );
};

export default ContactItem;