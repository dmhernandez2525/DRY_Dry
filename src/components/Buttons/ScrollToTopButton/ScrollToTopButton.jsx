
    import React from "react";
    
    import "./ScrollToTopButton.scss";
    
    const ScrollToTopButton = ({
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
        <div onClick={() => onClick("DryScrollToTopButton")}
          className="dry-scrollToTopButton">
          DryScrollToTopButton

        </div>
    );
    };
    
    ScrollToTopButton.defaultProps = {
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
      
    export default ScrollToTopButton;
    