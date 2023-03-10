import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Welcome to Dictionary Application</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <p>Dictionary Project</p>

        <footer className="App-footer">
          <small>Coded by Praneetha</small>
        </footer>
      </div>
    </div>
  );
}
