import React, { FC } from 'react'
import Button from './Button'

import './ControlPanels.css'

interface ControlPanelState {
    play?: any
    isPlaying?: any
    duration?: any
    currentTime?: any
}

const ControlPanels:FC<ControlPanelState> = ({play, isPlaying, duration, currentTime}) => {

    function secondsToHms(seconds: any) {
        if(!seconds) return '00m 00s'
        let duration = seconds
        let hours:any = duration / 3600
        duration = duration % 3600

        
        let dura:any = duration / 60
        let min:any = parseInt(dura)
        duration = duration % 60
        
        let sec:any = parseInt(duration)

        if(sec < 10) {
            sec = `0${sec}`
        }

        if(min < 10){
            min = `0${min}`
        } 

        if(parseInt(hours, 10) > 0) {
            return `${parseInt(hours, 10)}h ${min}m ${sec}s`
        }else if (min == 0) {
            return `00m ${sec}s`
        }else {
            return `${min}m ${sec}s`
        }
    }

    return (
        <div className='control-panel'>
            <div className="timer">{secondsToHms(currentTime)}</div>
            <Button play={play} isPlaying={isPlaying} />
            <div className="timer">{secondsToHms(duration)}</div>
        </div>
    )
}

export default ControlPanels
