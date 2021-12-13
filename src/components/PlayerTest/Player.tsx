import React, { FC, useRef, useState } from 'react'
import ControlPanels from './Controls/ControlPanels'

import './Player.css'
import Slider from './Slide/Slider'

interface PlayerState {
    book?: object
}

const Player: FC<PlayerState> = ({book}) => {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime]  = useState(0)

    const audioRef = useRef<any>()

    const onChange = (e: any) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 0.1

        if(!isPlaying) {
            setIsPlaying(true)
            audio.play()
        }

        if(isPlaying) {
            setIsPlaying(false)
            audio.pause()
        }
    }


    const getCurrDuration = (e: any) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    return (
        <div className='player-container'>
            <h1>Title</h1>
            <Slider percentage={percentage} onChange={onChange} />
            <audio 
            ref={audioRef}
            onTimeUpdate={getCurrDuration}
            onLoadedData={(e: any) => {
                setDuration(e.currentTarget.duration.toFixed(2))
            }}
            src='https://s3.eu-central-1.amazonaws.com/elib.live/uzhasy/zapertie-obuhova.mp3'
            ></audio>
            <ControlPanels
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
        </div>
    )
}

export default Player
