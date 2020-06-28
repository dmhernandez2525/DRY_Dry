
    import React from "react";
    
    import "./GradientBgScroll.scss";
    
    const GradientBgScroll = ({
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
        <div onClick={() => onClick("DryGradientBgScroll")}
          className="dry-gradientBgScroll">
          DryGradientBgScroll

        </div>
    );
    };
    
    GradientBgScroll.defaultProps = {
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
      
    export default GradientBgScroll;
    