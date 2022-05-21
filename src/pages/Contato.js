import * as React from "react";
import { Link ,} from "react-router-dom";
function Contato(){
    return (
        <div>
        <h1>Contato</h1>
        <p>Consegui</p>
        <nav>
      <p><br /></p>
        <Link exact to="/">Home</Link>
        <p><br /></p>
        <Link to="/atualidade">Atualidade</Link>
        <p><br /></p>
        <Link to="/aparelhagens">Musicas das Aparelhegens</Link>
        <p><br /></p>
        <Link to="/diario">Rádio Diário FM</Link>
        <p><br /></p>
        <Link to="/liberalam">Rádio 99 FM</Link>

<p><br /></p>

      </nav>
        </div>
        
    )
    }
    export default Contato