
    import React from "react";
    
    import "./CircularIndicator.scss";
    
    const CircularIndicator = ({
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
        <div onClick={() => onClick("DryCircularIndicator")}
          className="dry-circularIndicator">
          DryCircularIndicator

        </div>
    );
    };
    
    CircularIndicator.defaultProps = {
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
      
    export default CircularIndicator;
    