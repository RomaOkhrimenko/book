import React, { FC } from 'react'

import './Player.css'

interface PlayerState {
    image?: any
    title?: string
}

const Player: FC<PlayerState> = ({image, title}) => {
    return (
        <div className='player'>
            <div className="player-book">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Player
