import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function VideoApp() {
    return (
            <div>
               <p><br /></p>
            <iframe allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0" src="https://streaming.gruporba.com.br/" width="100%" height="320px" title="video"/>
            {""}
            <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

        
    );
}