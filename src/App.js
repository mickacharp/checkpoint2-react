import "./App.css";
import React from "react";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header name="My React Games List" />
      <Routes>
        <Route path="/" exact element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
