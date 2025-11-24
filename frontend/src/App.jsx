import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import ChatPage from "./Components/Chat/ChatPage";
import HistoryPage from "./Components/HistoryPage/HistoryPage";
import MainLayout from "./Components/Layout/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/chat"
        element={
          <MainLayout>
            <ChatPage />
          </MainLayout>
        }
      />
      <Route
        path="/historico"
        element={
          <MainLayout>
            <HistoryPage />
          </MainLayout>
        }
      />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
