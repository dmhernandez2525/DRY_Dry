
    import React from "react";
    
    import "./ScrollDrawing.scss";
    
    const ScrollDrawing = ({
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
        <div onClick={() => onClick("DryScrollDrawing")}
          className="dry-scrollDrawing">
          DryScrollDrawing

        </div>
    );
    };
    
    ScrollDrawing.defaultProps = {
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
      
    export default ScrollDrawing;
    