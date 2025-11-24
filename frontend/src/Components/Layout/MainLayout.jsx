import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const MainLayout = ({ children }) => {
  const { activeUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!activeUser) {
      navigate("/");
    }
  }, [activeUser, navigate]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="layout-root">
      <header className="layout-header">
        <h1 className="layout-title">Chat de Atendimento Simulado</h1>

        <div className="layout-user-info">
          <span>Usuário ativo: </span>
          <strong>
            {activeUser ? `Usuário ${activeUser}` : "nenhum selecionado"}
          </strong>
        </div>

        <button
          type="button"
          onClick={handleBack}
          className="layout-back-button"
        >
          Voltar
        </button>

        <nav className="layout-nav">
          <Link
            to="/chat"
            className={`layout-nav-link ${
              location.pathname === "/chat" ? "active" : ""
            }`}
          >
            Chat
          </Link>
          <Link
            to="/historico"
            className={`layout-nav-link ${
              location.pathname === "/historico" ? "active" : ""
            }`}
          >
            Histórico
          </Link>
        </nav>
      </header>

      <main className="layout-main">{children}</main>
    </div>
  );
};

export default MainLayout;
