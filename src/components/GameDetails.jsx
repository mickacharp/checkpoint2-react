import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameList.css";
import { useParams } from "react-router-dom";

function GameDetails() {
  const [gameDetailsList, setGameDetailsList] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://wild-games.jsrover.wilders.dev/games/${id}`)
      .then((response) => response.data)
      .then((data) => setGameDetailsList(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {gameDetailsList && (
        <div className="game-details">
          <h2>Game details of "{gameDetailsList.name}"</h2>
          <h4>
            Released on {gameDetailsList.released}, rated{" "}
            {gameDetailsList.rating}/10
          </h4>
          <img
            src={gameDetailsList.background_image}
            className="main-details-img"
            alt={gameDetailsList.slug}
          />
          <br />
          <div className="genres">
            <h4>
              Genres: {gameDetailsList.genres[0].name},{" "}
              {gameDetailsList.genres[1] && gameDetailsList.genres[1].name}
            </h4>
          </div>
          <div>
            <h4>Some pictures of the game:</h4>
            {gameDetailsList.short_screenshots.map((screen, index) => (
              <img
                className="screens"
                key={index}
                src={screen.image}
                alt={screen.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GameDetails;
