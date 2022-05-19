import * as React from "react";

import { Link ,} from "react-router-dom";
import "./index.css";


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
  export default Home