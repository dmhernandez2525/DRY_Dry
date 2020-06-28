import React from "react";

import "./PortfolioGallery.scss";

const PortfolioGallery = ({
  id,
  name,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  className,
  errorMes,
  styles,
  passProps,
}) => {
  return (
    <div
      onClick={() => onClick("DryPortfolioGallery")}
      className="dry-portfolioGallery"
    >
      DryPortfolioGallery
    </div>
  );
};

PortfolioGallery.defaultProps = {
  id: "",
  name: "",
  userTip: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  disable: false,
  className: "",
  errorMes: "",
  styles: null,
  passProps: null,
};

export default PortfolioGallery;
