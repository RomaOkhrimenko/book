import React, { FC } from 'react'

import './Button.css'

interface ButtonState {
    play?: any
    isPlaying?: any
}

const Button:FC<ButtonState> = ({play, isPlaying}) => {
    return (
        <div className='btn-container'>
            <div onClick={play} className={isPlaying ? 'btn-stop' : 'btn-play'}></div>
        </div>
    )
}

export default Button
