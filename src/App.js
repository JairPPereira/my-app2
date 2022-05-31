import * as React from "react";
import { Routes, Route, Link ,} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Atualidade from "./Pages/Atualidade";
import VideoApp from "./Pages/Rba";
import VideoApp2 from "./Pages/Classicos";
import VideoApp3 from "./Pages/Adrenalina";
import VideoApp4 from "./Pages/Comedia";
import VideoApp5 from "./Pages/Drama";
import VideoApp6 from "./Pages/Graopara";
import VideoApp7 from "./Pages/Recordnews";
import VideoApp8 from "./Pages/Sbt";
import VideoApp9 from "./Pages/Familia";
import VideoApp10 from "./Pages/Novotempo";
import VideoApp11 from "./Pages/Romance";
import VideoApp12 from "./Pages/Fmodia";
import VideoApp13 from "./Pages/Boasnovas";
import VideoApp14 from "./Pages/Sucessos";
import VideoApp15 from "./Pages/meusclips";
import Passado from "./Pages/Passado";
import Tophits from "./Pages/Tophits";
import Mix from "./Pages/Radiomix";
import './videojs-mobile-ui.css';

import './app.css';


function App() {
  return (
    
    <div className="App">
            <p><br /></p>
       <div className="Apre">
      <h1>JPP APP</h1>
      <h2>Bem Vindo</h2></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="atualidade" element={<Atualidade />} />
        <Route path="aparelhagens" element={<Aparelhagens/>} />
        <Route path="diario" element={<Diario/>} />
        <Route path="liberalam" element={<Liberal/>} />
        <Route path="rba" element={<VideoApp/>} />
        <Route path="classicos" element={<VideoApp2/>} />
        <Route path="passado" element={<Passado/>} />
        <Route path="tophits" element={<Tophits/>} />
        <Route path="adrenalina" element={<VideoApp3/>} />
        <Route path="comedia" element={<VideoApp4/>} />
        <Route path="drama" element={<VideoApp5/>} />
        <Route path="graopara" element={<VideoApp6/>} />
        <Route path="recordnews" element={<VideoApp7/>} />
        <Route path="sbt" element={<VideoApp8/>} />
        <Route path="familia" element={<VideoApp9/>} />
        <Route path="novotempo" element={<VideoApp10/>} />
        <Route path="romance" element={<VideoApp11/>} />
        <Route path="fmodia" element={<VideoApp12/>} />
        <Route path="boasnovas" element={<VideoApp13/>} />
        <Route path="sucessos" element={<VideoApp14/>} />
        <Route path="meusclips" element={<VideoApp15/>} />
        <Route path="mix" element={<Mix/>} />




      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
    
      <main>
        <div className="App">

        

  
    </div>
    <p><br /></p>
      </main>
      <div className="nave">
      <nav>
      <h1>Canais de Rádios</h1>
      <p><br /></p>
        <Link to="/passado">Passado</Link>
      <p><br /></p>
        <Link to="/tophits">TOP Hits</Link>
        <p><br /></p>
        <Link to="/atualidade">Atualidade</Link>
        <p><br /></p>
        <Link to="/aparelhagens">Musicas das Aparelhegens</Link>
        <p><br /></p>
        <Link to="/diario">Rádio Diário FM</Link>
        <p><br /></p>
        <Link to="/liberalam">Rádio 99 FM</Link>
        <p><br /></p>
        <Link to="/mix">Rádio MIX BELÉM</Link>
        <p><br /></p>
        <Link to="/meusclips">Videos Clips</Link>
        <p><br /></p>
        <h1>Canais de TVs</h1>
        <p><br /></p>
        <Link to="/recordnews">TV Recordnew</Link>
        <p><br /></p>
        <Link to="/rba">TV RBA</Link>
        <p><br /></p>
        <Link to="/sbt">TV SBT</Link>
        <p><br /></p>
        <Link to="/graopara">TV GRÃO PARÁ</Link>
        <p><br /></p>
        <Link to="/novotempo">TV NOVO TEMPO</Link>
        <p><br /></p>
        <Link to="/fmodia">FM O DIA</Link>
        <p><br /></p>
        <Link to="/boasnovas">TV BOAS NOVAS</Link>
        <p><br /></p>
        <h1>Canais PLUTO TVs</h1> 
        <h3>Somente para dispositivos mobile</h3>       
        <p><br /></p>
        <Link to="/classicos">Pluto Classicos</Link>        
<p><br /></p>
<Link to="/adrenalina">Adrenalina Freezone</Link>        
<p><br /></p>
<Link to="/comedia">Pluto Comédia</Link>        
<p><br /></p>
<Link to="/drama">Pluto Drama</Link>        
<p><br /></p>
<Link to="/familia">Pluto Familia</Link> 
<p><br /></p>    
<Link to="/romance">Pluto Romance</Link>        
<p><br /></p>    
<Link to="/sucessos">Pluto Sucessos</Link>   
<p><br /></p>
      </nav></div>
      <p><br /></p>
    </>
  );
}





function Aparelhagens() {
  return (
    <>
      <main>
      <div className='pele'>
        <h2>Musicas das Aparelhagens</h2>
        <img class="fit-picture"
          src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png"
          alt="Grapefruit slice atop a pile of other slices"></img>
        <ReactAudioPlayer
          src="http://stream.zeno.fm/vbatxgxryhhvv.mp3"
          controls
        /></div>
      </main>
      <p><br /></p>
      <div className="nave">
      <nav>
      <p><br /></p>
        <Link to="/">Home</Link>

      </nav></div>
    </>
  );
}

function Diario() {
  return (
    <>
      <main>
      <div className='pele'>
        <h2>Rádio Diário FM</h2>
        <img class="fit-picture"
          src="https://blogger.googleusercontent.com/img/a/AVvXsEgOnuvLYhLtmyt9WmJN32_i2wPeOJbfPatLtatxUksLhD_Nev7v5saLrwWbMxPfyUYysEKcRxTc1R1cS-HYBxwFocsyOC0ASMSvtiNt96hpc_WoYJvOSidyLrHXMySg9iXACIya2niAHUlBAw_pLkO9BWGUFnWWjRvTM6sTDcLv6cyRRRoyott82Vnz=s200"
          alt="Grapefruit slice atop a pile of other slices"></img>
        <ReactAudioPlayer
          src="https://hts02.kshost.com.br:8856/live"
          controls
        /></div>
      </main>
      <p><br /></p>
      <div className="nave">
      <nav>
      <p><br /></p>
        <Link to="/">Home</Link>

      </nav></div>
    </>
  );
}


function Liberal() {
  return (
    <>
      <main>
      <div className='pele'>
        <h2>Rádio 99 FM</h2>
        <img class="fit-picture"
          src="https://blogger.googleusercontent.com/img/a/AVvXsEgUu4NGgas5-F2I9qmDNFWzZGLtPwkQzLNX7bLrEMRGKN1U8-Vdmu42-BGGDfS8bCfQwQ5pxoMZAVSadOO-DNNZrEiadzA0F-IfWgdLlBql9GkB13datNJiEPEephvF9VDF0seTGom22RWI9I2LupC_vEcdgznRRHLhSItPnn7-FE83k7B91sQJ8GAy=s200"
          alt="Grapefruit slice atop a pile of other slices"></img>
        <ReactAudioPlayer
          src="https://hts02.kshost.com.br:8862/live"
          controls
        /></div>
      </main>
      <p><br /></p>
      <div className="nave">
      <nav>
      <p><br /></p>
        <Link to="/">Home</Link>

      </nav></div>
    </>
  );
}






export default App