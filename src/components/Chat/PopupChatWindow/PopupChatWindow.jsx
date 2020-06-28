import React from "react";

import "./PopupChatWindow.scss";

const PopupChatWindow = ({
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
      onClick={() => onClick("DryPopupChatWindow")}
      className="dry-popupChatWindow"
    >
      DryPopupChatWindow
    </div>
  );
};

PopupChatWindow.defaultProps = {
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

export default PopupChatWindow;
