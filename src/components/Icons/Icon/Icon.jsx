import React from "react";

const Icon = ({ className, width, height, title, viewBox, icon }) => {
  let displayTitle = "";
  if (title) {
    displayTitle = <span className="">{`${icon}`}</span>;
  }

  return (
    <div className={`icon__main-wrapper ${className}`}>
      <div className="icon__svg-name-wrapper">
        <svg
          viewBox={viewBox}
          width={width}
          height={height}
          className={`dry-icon-${icon}`}
        >
          <use href={`#dry-icon-${icon}`}></use>
        </svg>
        {displayTitle}
      </div>
    </div>
  );
};

Icon.defaultProps = {
  className: "",
  width: "50",
  height: "50",
  viewBox: "0 0 100 100",
  icon: "home",
  title: false
};
export default Icon;
