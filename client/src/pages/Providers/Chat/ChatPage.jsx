// ChatPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChatPage({ participantName }) {
  const [messages, setMessages] = useState([
    { sender: participantName, text: "Hello! How can I assist you today?" },
    { sender: "You", text: "Hi, I'm interested in the job details." }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-white text-lg font-bold">&larr; Back</button>
        <h1 className="text-xl font-semibold">gig Chat {participantName}</h1>
      </header>

      {/* Messages Display */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-4 flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
          >
            <div className={`p-3 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-gray-800 text-white" : "bg-gray-300 text-gray-900"}`}>
              <span className="block font-semibold">{msg.sender}</span>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t border-gray-200 flex items-center gap-3">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..." 
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
        <button 
          onClick={handleSendMessage} 
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
