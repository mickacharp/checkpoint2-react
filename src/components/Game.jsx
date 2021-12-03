import React from "react";
import "./GameList.css";
import { Link } from "react-router-dom";

function Game({
  name,
  rating,
  released,
  image,
  slug,
  id,
  gameList,
  setGameList,
}) {
  return (
    <>
      <div className="game-container">
        <h3>{name}</h3>
        <h5>
          was released on {released} and got a rate of {rating}
        </h5>
        <img src={image} className="game-img" alt={slug} />
        <br />
        <Link to={`/games/${id}`}>
          <button className="details-btn"> Get details about that game!</button>
        </Link>
        <br />
        <button
          className="delete-btn"
          onClick={() => setGameList(gameList.filter((game) => game.id !== id))}
        >
          Delete this game
        </button>
      </div>
    </>
  );
}

export default Game;
