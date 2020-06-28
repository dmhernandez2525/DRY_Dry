
    import React from "react";
    
    import "./DarkMode.scss";
    
    const DarkMode = ({
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
        <div onClick={() => onClick("DryDarkMode")}
          className="dry-darkMode">
          DryDarkMode

        </div>
    );
    };
    
    DarkMode.defaultProps = {
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
      
    export default DarkMode;
    