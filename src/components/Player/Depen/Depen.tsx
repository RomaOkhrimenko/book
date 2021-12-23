import React, { FC } from 'react'

import volume from '../../../assets/image/books/player/volume.png'
import menu from '../../../assets/image/books/player/player-menu.png'
import closePlayer from '../../../assets/image/books/player/close-player.png'

interface DepenState {
    viewPlayer?: any
}

const Depen:FC<DepenState> = ({viewPlayer}) => {
    return (
            <div className="player-book-depen">
                <div className="player-close-con">
                    <img className="close-player" onClick={viewPlayer} src={closePlayer} alt="d" />
                </div>
            </div>
    )
}

export default Depen
