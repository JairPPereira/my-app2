import * as React from "react";
import { Routes, Route, Link ,} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';








import './App.css';
import Contato from "./pages/Contato";

function App() {
  return (
    
    <div className="App">
      <h1>Estações de Rádios</h1>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Contato />} />
        <Route path="atualidade" element={<Atualidade />} />
        <Route path="aparelhagens" element={<Aparelhagens/>} />
        <Route path="diario" element={<Diario/>} />
        <Route path="liberalam" element={<Liberal/>} />




      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <div className="App">
      <div className='pele'>
        <h2>Passado</h2>
        <img class="fit-picture"
          src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png"
          alt="Grapefruit slice atop a pile of other slices"></img>
        <ReactAudioPlayer
          src="http://stream.zeno.fm/n290bnzvsy8uv.mp3"
          controls
        /></div>

  
    </div>
      </main>
      <p><br /></p>
      <div className="nave">
      <nav>
      <p><br /></p>
        <Link exact to="/about">TOP Hits</Link>
        <p><br /></p>
        <Link to="/atualidade">Atualidade</Link>
        <p><br /></p>
        <Link to="/aparelhagens">Musicas das Aparelhegens</Link>
        <p><br /></p>
        <Link to="/diario">Rádio Diário FM</Link>
        <p><br /></p>
        <Link to="/liberalam">Rádio 99 FM</Link>

<p><br /></p>

      </nav></div>
    </>
  );
}



function Atualidade() {
  return (
    <>
      <main>
      <div className='pele'>
        <h2>Atualidade</h2>
        <img class="fit-picture"
          src="https://1.bp.blogspot.com/-mvFZTJD3EqA/YUaZpxM510I/AAAAAAAABHg/EW790K3rrfIxt3KPjpk5kx8WzgqJcstRACLcBGAsYHQ/s0/mradio.png"
          alt="Grapefruit slice atop a pile of other slices"></img>
        <ReactAudioPlayer
          src="http://stream.zeno.fm/3ggkqnsn3ehvv.mp3"
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