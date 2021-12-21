import React from "react";
import "./styles.scss";

const ProgressIndicator = ({ progress = 20 }) => (
  <div className="progress-indicator">
    <div
      style={{
        height: `${progress}%`,
      }}
      className="progress-thumb"
    ></div>
  </div>
);

export default ProgressIndicator;
