import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import "./GameList.css";

function GameList() {
  const [gameList, setGameList] = useState();
  const [displayAllGames, setDisplayAllGames] = useState(true);

  useEffect(() => {
    if (displayAllGames) {
      axios
        .get(`https://wild-games.jsrover.wilders.dev/games`)
        .then((response) => response.data)
        .then((data) => setGameList(data))
        .catch((error) => console.log(error));
    }
  }, [displayAllGames]);

  const bestGames = gameList && gameList.filter((game) => game.rating > 4.5);

  return (
    <div>
      <button
        onClick={() => {
          setGameList(bestGames);
          setDisplayAllGames(!displayAllGames);
        }}
      >
        {displayAllGames ? "Display best games" : "Display all games"}
      </button>
      <div className="game-list">
        {gameList &&
          gameList.map((game, index) => (
            <Game
              key={index}
              name={game.name}
              rating={game.rating}
              released={game.released}
              image={game.background_image}
              slug={game.slug}
              id={game.id}
              gameList={gameList}
              setGameList={setGameList}
            />
          ))}
      </div>
    </div>
  );
}

export default GameList;
