
    import React from "react";
    
    import "./HideNavbaronScroll.scss";
    
    const HideNavbaronScroll = ({
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
        <div onClick={() => onClick("DryHideNavbaronScroll")}
          className="dry-hideNavbaronScroll">
          DryHideNavbaronScroll

        </div>
    );
    };
    
    HideNavbaronScroll.defaultProps = {
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
      
    export default HideNavbaronScroll;
    