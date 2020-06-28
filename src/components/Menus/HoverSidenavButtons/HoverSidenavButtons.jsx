
    import React from "react";
    
    import "./HoverSidenavButtons.scss";
    
    const HoverSidenavButtons = ({
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
        <div onClick={() => onClick("DryHoverSidenavButtons")}
          className="dry-hoverSidenavButtons">
          DryHoverSidenavButtons

        </div>
    );
    };
    
    HoverSidenavButtons.defaultProps = {
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
      
    export default HoverSidenavButtons;
    