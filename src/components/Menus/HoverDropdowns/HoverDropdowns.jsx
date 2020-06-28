
    import React from "react";
    
    import "./HoverDropdowns.scss";
    
    const HoverDropdowns = ({
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
        <div onClick={() => onClick("DryHoverDropdowns")}
          className="dry-hoverDropdowns">
          DryHoverDropdowns

        </div>
    );
    };
    
    HoverDropdowns.defaultProps = {
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
      
    export default HoverDropdowns;
    