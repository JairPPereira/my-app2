import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function VideoApp7() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://www.youtube.com/embed/live_stream?channel=UCuiLR4p6wQ3xLEm15pEn1Xw&autoplay=1"
        frameborder="0"
        width="100%" height="320px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
                  <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

  );
}





