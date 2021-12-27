import React, { FC, useEffect, useState } from "react";

interface SliderState {
    percentage: number
    onChange: () => number
}

const Slide: FC<SliderState> = ({percentage, onChange}) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(percentage);
  }, [percentage]);
  return (
    <div className="buttons-input">
          <input className="progress-bar-main" type="range" min="0" max="100" value={position} onChange={onChange} />
      </div>
  );
};

export default Slide;
