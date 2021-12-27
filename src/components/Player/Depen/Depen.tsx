import { FC } from 'react'

import closePlayer from '../../../assets/image/books/player/close-player.png'

interface DepenState {
    viewPlayer: () => void
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
