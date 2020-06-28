
    import React from "react";
    
    import "./SmoothScroll.scss";
    
    const SmoothScroll = ({
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
        <div onClick={() => onClick("DrySmoothScroll")}
          className="dry-smoothScroll">
          DrySmoothScroll

        </div>
    );
    };
    
    SmoothScroll.defaultProps = {
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
      
    export default SmoothScroll;
    