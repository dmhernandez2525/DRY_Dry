
    import React from "react";
    
    import "./TypicalDeviceBreakpoints.scss";
    
    const TypicalDeviceBreakpoints = ({
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
        <div onClick={() => onClick("DryTypicalDeviceBreakpoints")}
          className="dry-typicalDeviceBreakpoints">
          DryTypicalDeviceBreakpoints

        </div>
    );
    };
    
    TypicalDeviceBreakpoints.defaultProps = {
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
      
    export default TypicalDeviceBreakpoints;
    