import React from "react";
import { messages, contacts } from "../data";
import Contacts from "./Contacts";
import Messages from "./Messages";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Contacts contacts={contacts}/>
      <Messages messages={messages}/>
    </div>
  );
}

export default App;
