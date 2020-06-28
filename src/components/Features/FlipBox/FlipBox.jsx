
    import React from "react";
    
    import "./FlipBox.scss";
    
    const FlipBox = ({
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
        <div onClick={() => onClick("DryFlipBox")}
          className="dry-flipBox">
          DryFlipBox

        </div>
    );
    };
    
    FlipBox.defaultProps = {
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
      
    export default FlipBox;
    