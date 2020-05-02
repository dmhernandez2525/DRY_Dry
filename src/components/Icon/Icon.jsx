import React from "react";
import Icons from "./Icons";

const Icon = ({ className, width, height, title, viewBox, icon }) => {
  return (
    <div className="icon__main-wrapper">
      <Icons />
      <div className="icon__svg-name-wrapper">
        <svg
          viewBox={viewBox}
          width={width}
          height={height}
          className={`dry-icon-${icon}`}
        >
          <use href={`#dry-icon-${icon}`}></use>
        </svg>
        <span className="">{`${icon}`}</span>
      </div>
    </div>
  );
};

Icon.defaultProps = {
  className: "",
  width: "50",
  height: "50",
  viewBox: "0 0 100 100",
  icon: "home"
};
export default Icon;
