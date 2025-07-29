const contacts = [
    {
        id: 1,
        name: 'Pepe',
        description: 'Solo vives una vez, pero no te olvides de mi',
        avatar: 'https://ui-avatars.com/api/?name=Pepe&background=ff6b6b&color=fff&size=128',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola estoy hablando con pepe',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Si el que canta y baila',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Juan',
        description: 'rie ama y sueña',
        avatar: 'https://ui-avatars.com/api/?name=Juan&background=4ecdc4&color=fff&size=128',
        lastConnection: 'ahora',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Hola que tal?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            }
        ]
    }
];


export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}