import "../App.css";

function Header({ name }) {
  return (
    <div className="header-container">
      <h1>{name}</h1>
      <h2>Welcome on my website dedicated to my favorite games!</h2>
    </div>
  );
}

export default Header;
