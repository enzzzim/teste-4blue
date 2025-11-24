/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect } from "react";
import api from "../../api";
import { useUser } from "../Context/UserContext";

const ChatPage = () => {
  const { activeUser } = useUser();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // sempre que trocar de usuário, limpa o chat da tela
  useEffect(() => {
    setMessages([]);
    setInput("");
  }, [activeUser]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    try {
      const response = await api.post("/messages/", {
        user: activeUser,
        question: text,
      });

      setMessages((prev) => [...prev, response.data]);
      setInput("");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <div className="chat-page">
      <h2 className="chat-title">Tela de Chat</h2>
      <p className="chat-user-label">Você está como: Usuário {activeUser}</p>

      <div className="chat-messages-container">
        {messages.length === 0 && (
          <p className="chat-empty">Não há mensagens nesta sessão de chat.</p>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className="chat-message">
            <div className="chat-message-question">
              <strong>Usuário {msg.user}:</strong> {msg.question}
            </div>
            <div className="chat-message-answer">
              <strong>Bot:</strong> {msg.answer}
            </div>
          </div>
        ))}
      </div>

      <form className="chat-form" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chat-input"
        />
        <button type="submit" className="chat-send-button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
