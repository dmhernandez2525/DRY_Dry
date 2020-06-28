
    import React from "react";
    
    import "./ToggleButton.scss";
    
    const ToggleButton = ({
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
        <div onClick={() => onClick("DryToggleButton")}
          className="dry-toggleButton">
          DryToggleButton

        </div>
    );
    };
    
    ToggleButton.defaultProps = {
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
      
    export default ToggleButton;
    