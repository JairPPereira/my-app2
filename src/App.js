
import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <ReactAudioPlayer
    src="https://ice01.kshost.com.br:8000/live"
    controls
  />,
  document.querySelector('.app'),
);
//...

function App() {
  return (
    
    <div className="App">

    </div>
  );
}

export default App;


