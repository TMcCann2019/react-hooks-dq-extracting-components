import React from "react";
import MessagesForm from "./MessagesForm";

function Messages ({messages}) {
    const messageList = messages.map((message) => {
        return (
            <li key= {message.id} className={`message ${message.type}`}>
                <div className="icon">{message.icon}</div>
                <span className="content">{message.content}</span>
            </li>
        )
    })
    return (
        <main>
            <h2>Messages</h2>
            <section className="messages">
            <ul>
                {messageList}
            </ul>
            </section>
            <MessagesForm />
        </main>
    )
}

export default Messages;