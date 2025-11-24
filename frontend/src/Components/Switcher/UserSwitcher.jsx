import React from "react";
import { useUser } from "../Context/UserContext";

const UserSwitcher = () => {
  const { activeUser, setActiveUser } = useUser();

  return (
    <div className="user-switcher">
      <span className="user-switcher-label">Usuário ativo:</span>
      <button
        type="button"
        onClick={() => setActiveUser("A")}
        className={`user-switcher-button ${
          activeUser === "A" ? "active" : ""
        }`}
      >
        Usuário A
      </button>
      <button
        type="button"
        onClick={() => setActiveUser("B")}
        className={`user-switcher-button ${
          activeUser === "B" ? "active" : ""
        }`}
      >
        Usuário B
      </button>
    </div>
  );
};

export default UserSwitcher;
