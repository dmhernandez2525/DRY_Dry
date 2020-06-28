
    import React from "react";
    
    import "./FadingButtons.scss";
    
    const FadingButtons = ({
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
        <div onClick={() => onClick("DryFadingButtons")}
          className="dry-fadingButtons">
          DryFadingButtons

        </div>
    );
    };
    
    FadingButtons.defaultProps = {
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
      
    export default FadingButtons;
    