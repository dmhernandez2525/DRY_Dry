import React from "react";

const Icon = ({ className, width, height, title, viewBox }) => {
  return (
    <svg viewBox={viewBox} className={className} width={width} height={height}>
      <title>{title}</title>
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
};

Icon.defaultProps = {
  className: "",
  width: "150",
  height: "150",
  title: "",
  viewBox: "0 0 100 100"
};
export default Icon;
