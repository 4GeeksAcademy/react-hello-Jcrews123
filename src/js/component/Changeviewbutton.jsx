import React from "react";

const ToggleButton = ({ onClick, isMobileView }) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            {isMobileView ? "Switch to Desktop View" : "Switch to Mobile View"}
        </button>
    );
};

export default ToggleButton;