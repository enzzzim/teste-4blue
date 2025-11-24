import React, { useEffect, useState } from "react";
import api from "../../api";
import { useUser } from "../Context/UserContext";

const HistoryPage = () => {
  const { activeUser } = useUser();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadHistory = async () => {
      setLoading(true);
      try {
        const response = await api.get("/messages/", {
          params: { user: activeUser },
        });
        setHistory(response.data);
      } catch (err) {
        console.error(err);
        alert("Erro ao carregar histórico.");
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, [activeUser]);

  return (
    <div className="history-page">
      <h2 className="history-title">Histórico de Mensagens</h2>
      <p className="history-subtitle">
        Exibindo mensagens do Usuário {activeUser}
      </p>

      {loading && <p className="history-status">Carregando...</p>}

      {!loading && history.length === 0 && (
        <p className="history-status history-empty">
          Este usuário ainda não possui mensagens.
        </p>
      )}

      {!loading && history.length > 0 && (
        <div className="history-list">
          {history.map((msg) => (
            <div key={msg.id} className="history-item">
              <div className="history-item-meta">
                {new Date(msg.created_at).toLocaleString()}
              </div>
              <div className="history-item-question">
                <strong>Usuário {msg.user}:</strong> {msg.question}
              </div>
              <div className="history-item-answer">
                <strong>Bot:</strong> {msg.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
