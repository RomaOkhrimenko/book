import React, { FC } from 'react'

import './Depen.css'

import volume from '../../../assets/image/books/player/volume.png'
import menu from '../../../assets/image/books/player/player-menu.png'
import closePlayer from '../../../assets/image/books/player/close-player.png'

interface DepenState {
    viewPlayer: any
}

const Depen:FC<DepenState> = ({viewPlayer}) => {
    return (
        <>
            <div className="player-book-depen">
                <div className="player-close-con" onClick={() => viewPlayer()}>
                    <img className="close-player" src={closePlayer} alt="" />
                </div>

            </div>
        </>
    )
}

export default Depen
