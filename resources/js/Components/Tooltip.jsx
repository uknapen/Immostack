import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsTooltipVisible(true);
    };

    const handleMouseLeave = () => {
        setIsTooltipVisible(false);
    };

    return (
        <div className="icon-tooltip">
            <button
                type="button"
                className="tooltip-button"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </button>

            {isTooltipVisible && <div className="tooltip-content">{text}</div>}
        </div>
    );
};

export default Tooltip;
