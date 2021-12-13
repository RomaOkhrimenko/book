import React, { FC } from 'react'

import './Loader.css'

const Loader: FC = () => {
    return (
        <div>
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
