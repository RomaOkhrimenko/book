import React, { FC, useRef, useState } from "react";
import Buttons from "./Control/Buttons";
import Depen from "./Depen/Depen";

import "./Player.css";

interface PlayerState {
  image: any;
  title: string;
  author: string;
  viewPlayer: any
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
    setCurrentTime(prev => prev -15)
  }

 

  return (
    <div className="player-book active">
      <audio
        ref={audioRef}
        src="https://s3.eu-central-1.amazonaws.com/elib.live/uzhasy/zapertie-obuhova.mp3"
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e:any) => {
            setDuration(e.currentTarget.duration.toFixed(2))
          }}

      ></audio>
      <div className="player-book-container">
        <div className="player-book-info">
          <img src={image} alt="" />
          <div className="player-about-book">
            <h4>{title}</h4>
            <span>{author}</span>
          </div>
        </div>
        <Buttons
        percentage={percentage} 
        onChange={onChange} 
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
        audioRef={audioRef}
        rewindLeft={rewindLeft} />

        <Depen
        viewPlayer={viewPlayer} />
      </div>
    </div>
  );
};

export default Player;
