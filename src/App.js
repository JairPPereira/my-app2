import * as React from "react";
import { Routes, Route, Link ,} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bem vindo ao meu aplicativo de musicas!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <main>
        <h2>Bem vindo ao meu aplicativo de musicas!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
         Vamos trabalhar?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default App