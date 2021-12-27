import React, { FC, useRef, useState } from "react";
import Buttons from "./Control/Buttons";
import Depen from "./Depen/Depen";

import "./Player.css";

interface PlayerState {
  image: string;
  title: string;
  author: string;
  viewPlayer: () => void
}

const Player: FC<PlayerState> = ({ image, title, author, viewPlayer }) => {
  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<any>();

  const onChange = (e:any) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e:any) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime
    
    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  const rewindLeft = () => {
    const audio = audioRef.current
    audio.currentTime = audio.currentTime - 10
  }

  const rewindRight = () => {
    const audio = audioRef.current
    audio.currentTime = audio.currentTime + 10
  }

  

  return (
    <div className="player-book player-phone-main active">
      <audio 
      ref={audioRef}
      onTimeUpdate={getCurrDuration}
        onLoadedData={(e: any) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
      src="https://s3.eu-central-1.amazonaws.com/elib.live/uzhasy/zapertie-obuhova.mp3"
      
      ></audio>
        <div className="player-book-container">
            <div className="player-book-info">
                <img src={image} alt={title} />
                <div className="player-about-book">
                    <h4>{title}</h4>
                    <span>{author}</span>
                </div>
            </div>
            <Buttons
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
            percentage={percentage}
            onChange={onChange}
            rewindLeft={rewindLeft}
            rewindRight={rewindRight}
            />
            <Depen
            viewPlayer={viewPlayer} />

        </div>
        <input id="progress-bar-main" className="progress-bar-main" type="range" min="0" max="100" value={percentage} onChange={onChange} />
    </div>
  );
};

export default Player;
