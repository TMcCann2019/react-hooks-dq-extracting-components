import React from "react";

function Contacts ({contacts}) {
    const contactsList = contacts.map((contact) => {
        return (
            <li key={contact.id} className={contact.name === "Pamela" ? 'contact active' : 'contact'}>
                <div className="icon">
                    {contact.name[0]}
                </div>
                {contact.name}
            </li>
        )
    })

    return (
        <nav>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contactsList}
            </ul>
        </nav> 
    )
}

export default Contacts;