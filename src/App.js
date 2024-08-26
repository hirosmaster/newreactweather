import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather</h1>
        <Weather />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/hirosmaster" target="_blank">
            Rica Andrea Soriano
          </a>
          and is open sourced on{" "}
          <a
            href="https://github.com/hirosmaster/newreactweather"
            target="_blank"
          >
            Github
          </a>
          and is hosted on{" "}
          <a
            href="https://master--boopyboopweather.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
