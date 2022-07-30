import React from 'react';
import { Link } from 'react-router-dom';

const Filme759175 = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <Link to="/">retornar a página inicial</Link>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Filme759175;