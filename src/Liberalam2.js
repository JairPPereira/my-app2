import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videojs-mobile-ui.css';
 
class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: "https://5cf4a2c2512a2.streamlock.net/rbatv/rbatv/playlist.m3u8",

            poster: "https://1.bp.blogspot.com/-cbteNa2Lbbk/YTHtqT71YKI/AAAAAAAABBE/6unXmv_iNUMlci-B0sBYrV1lOdGdMfqjACLcBGAsYHQ/s200/rba200.jpg"
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
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
}
export default  VideoApp;