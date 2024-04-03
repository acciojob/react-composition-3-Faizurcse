import React, { useState } from 'react';
import './../styles/Tooltip.css';

function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
}

export default Tooltip;
