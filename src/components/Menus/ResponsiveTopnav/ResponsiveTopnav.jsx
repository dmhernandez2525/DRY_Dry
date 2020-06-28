
    import React from "react";
    
    import "./ResponsiveTopnav.scss";
    
    const ResponsiveTopnav = ({
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
        <div onClick={() => onClick("DryResponsiveTopnav")}
          className="dry-responsiveTopnav">
          DryResponsiveTopnav

        </div>
    );
    };
    
    ResponsiveTopnav.defaultProps = {
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
      
    export default ResponsiveTopnav;
    