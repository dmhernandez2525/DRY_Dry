
    import React from "react";
    
    import "./HoverTabs.scss";
    
    const HoverTabs = ({
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
        <div onClick={() => onClick("DryHoverTabs")}
          className="dry-hoverTabs">
          DryHoverTabs

        </div>
    );
    };
    
    HoverTabs.defaultProps = {
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
      
    export default HoverTabs;
    