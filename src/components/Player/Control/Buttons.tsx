import React, { FC } from 'react'

import left from '../../../assets/image/books/player/left-rewind-10.png'
import playPc from '../../../assets/image/books/player/play-player.png'
import pausePc from '../../../assets/image/books/player/pause-player.png'
import right from '../../../assets/image/books/player/right-rewind-10.png'

import './Button.css'
import Slide from './Slide'


interface ButtonState {
    percentage: any
    onChange: any
    play: any
    isPlaying: any
    duration: any
    currentTime: any
    audioRef: any
    rewindLeft: any
}

const Buttons:FC<ButtonState> = ({percentage, onChange, play, isPlaying, duration, currentTime, rewindLeft }) => {
    function secondsToHms(seconds: any) {
        if (!seconds) return '00m 00s'
    
        let duration = seconds
        let hours:any = duration / 3600
        duration = duration % 3600

        let dura:any = duration / 60
    
        let min:any = parseInt(dura)
        duration = duration % 60
    
        let sec:any = parseInt(duration)
    
        if (sec < 10) {
          sec = `0${sec}`
        }
        if (min < 10) {
          min = `0${min}`
        }
    
        if (parseInt(hours, 10) > 0) {
          return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        } else if (min == 0) {
          return `00m ${sec}s`
        } else {
          return `${min}m ${sec}s`
        }
      }

    return (
        <div className="player-book-buttons">
           
                <Slide percentage={percentage} onChange={onChange} />
                <div className="book-time">
                    <span className="current-time">{secondsToHms(currentTime)}</span>
                    <span className="duration-time">{secondsToHms(duration)}</span>
                </div>
                <div className="buttons-navigation">
                    <img className="main-minus" onClick={() => rewindLeft()} src={left} alt="left" />
                    <div className="play-books">
                    <img  src={isPlaying ? pausePc : playPc} onClick={play}  alt="" width="40px;" />
                     </div>
                    <img className="main-plus" src={right} alt="right" />
                </div>
            </div>
    )
}       

export default Buttons
 