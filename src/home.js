import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <div className="leftPanel">
        <div className="title" />
        <div className="links">
          <div className="links-container">
            <div className="link-icon" />
            <Link to="/proyecto" className="link">
              PROYECTO
            </Link>
          </div>
          <div className="links-container">
            <div className="link-icon" />
            <Link to="/realizadores" className="link">
              REALIZADORES
            </Link>
          </div>
          <div className="links-container">
            <div className="link-icon" />
            <Link to="/agradecimientos" className="link">
              AGRADECIMIENTOS
            </Link>
          </div>
        </div>
      </div>
      <div className="rightPanel">
        <div className="containerPanel">
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="arrow" />
        </div>
      </div>
    </div>
  );
}
