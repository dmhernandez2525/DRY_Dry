import React from "react";

import "./Footer.scss";

const Footer = ({
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
  passProps
}) => {
  return (
    <div onClick={() => onClick("DryFooter")} className="dry-footer">
      <div className="container">
        <div className="footer-area">
          <div className="footer-links">
            <a href="#">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="#">
              <span className="fa fa-google-plus"></span>
            </a>
            <a href="#">
              <span className="fa fa-linkedin"></span>
            </a>
            <a href="#">
              <span className="fa fa-youtube"></span>
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              Designed & Published by{" "}
              <a href="http://www.comfortorder.com/" target="_blank">
                Comfort Order
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
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
  passProps: null
};

export default Footer;
