
    import React from "react";
    
    import "./StickyNavbar.scss";
    
    const StickyNavbar = ({
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
        <div onClick={() => onClick("DryStickyNavbar")}
          className="dry-stickyNavbar">
          DryStickyNavbar

        </div>
    );
    };
    
    StickyNavbar.defaultProps = {
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
      
    export default StickyNavbar;
    