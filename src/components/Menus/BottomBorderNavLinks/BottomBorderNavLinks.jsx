
    import React from "react";
    
    import "./BottomBorderNavLinks.scss";
    
    const BottomBorderNavLinks = ({
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
        <div onClick={() => onClick("DryBottomBorderNavLinks")}
          className="dry-bottomBorderNavLinks">
          DryBottomBorderNavLinks

        </div>
    );
    };
    
    BottomBorderNavLinks.defaultProps = {
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
      
    export default BottomBorderNavLinks;
    