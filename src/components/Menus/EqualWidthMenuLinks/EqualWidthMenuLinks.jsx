
    import React from "react";
    
    import "./EqualWidthMenuLinks.scss";
    
    const EqualWidthMenuLinks = ({
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
        <div onClick={() => onClick("DryEqualWidthMenuLinks")}
          className="dry-equalWidthMenuLinks">
          DryEqualWidthMenuLinks

        </div>
    );
    };
    
    EqualWidthMenuLinks.defaultProps = {
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
      
    export default EqualWidthMenuLinks;
    