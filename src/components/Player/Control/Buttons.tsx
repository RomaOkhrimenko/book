import React, { FC } from 'react'

import left from '../../../assets/image/books/player/left-rewind-10.png'
import playPc from '../../../assets/image/books/player/play-player.png'
import pausePc from '../../../assets/image/books/player/pause-player.png'
import right from '../../../assets/image/books/player/right-rewind-10.png'
import Slide from './Slide'


interface ButtonState {
    percentage?: any
    onChange?: any
    play?: any
    isPlaying?: any
    duration?: any
    currentTime?: any
    audioRef?: any
    rewindLeft: any
    rewindRight: any
}

const Buttons:FC<ButtonState> = ({percentage, onChange, play, isPlaying, duration, currentTime,rewindLeft, rewindRight}) => {
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
        <img src={left} onClick={rewindLeft} alt="rewindRight" />
          <div className="play-books">
          <img  onClick={play}  src={isPlaying ? pausePc : playPc } alt="d" />
           </div>
           <img src={right} onClick={rewindRight} alt="onClick={rewindLeft}" />
      </div>
  </div>
    )
}       

export default Buttons
 