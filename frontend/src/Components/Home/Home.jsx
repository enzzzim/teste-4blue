import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const Home = () => {
  const { setActiveUser } = useUser();
  const navigate = useNavigate();

  const handleSelectUser = (user) => {
    setActiveUser(user);
    navigate("/chat");
  };

  return (
    <div className="home-page">
      {/* “Nav bar” simples com o título */}
      <header className="home-header">
        <span className="home-header-title">Chat de Atendimento Simulado</span>
      </header>

      {/* Área central com os cards grandes */}
      <main className="home-main">
        <p className="home-subtitle">Escolha como deseja acessar:</p>

        <div className="home-options">
          <button
            type="button"
            className="home-card-button"
            onClick={() => handleSelectUser("A")}
          >
            <span className="home-card-label">Usuário</span>
            <span className="home-card-label-strong">A</span>
          </button>

          <button
            type="button"
            className="home-card-button"
            onClick={() => handleSelectUser("B")}
          >
            <span className="home-card-label">Usuário</span>
            <span className="home-card-label-strong">B</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
