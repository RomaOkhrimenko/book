import React, { FC, useEffect, useRef, useState } from 'react'

import './Slider.css'

interface SliderState {
    percentage?: number
    onChange?: any
}

const Slider:FC<SliderState> = ({percentage = 0, onChange}) => {
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)


    const rangeRef = useRef<any>()
    const thumbRef = useRef<any>()

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar = 
            thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        setPosition(percentage)
        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
        }, [percentage])


    return (
        <div className="slider-container">
            <div 
            className="progress-bar-cover"
            style={{width: `${progressBarWidth}`}}
            ></div>
            <div 
            className="thumb"
            ref={thumbRef}
            style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}`
            }}></div>
            <input type="range" value={position} ref={rangeRef} step='0.01' className='range' onChange={onChange} />
            
        </div>
    )
}

export default Slider