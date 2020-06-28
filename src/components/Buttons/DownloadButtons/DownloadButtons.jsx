
    import React from "react";
    
    import "./DownloadButtons.scss";
    
    const DownloadButtons = ({
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
        <div onClick={() => onClick("DryDownloadButtons")}
          className="dry-downloadButtons">
          DryDownloadButtons

        </div>
    );
    };
    
    DownloadButtons.defaultProps = {
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
      
    export default DownloadButtons;
    