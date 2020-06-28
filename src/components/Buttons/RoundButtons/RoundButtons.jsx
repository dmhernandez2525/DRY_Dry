
    import React from "react";
    
    import "./RoundButtons.scss";
    
    const RoundButtons = ({
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
        <div onClick={() => onClick("DryRoundButtons")}
          className="dry-roundButtons">
          DryRoundButtons

        </div>
    );
    };
    
    RoundButtons.defaultProps = {
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
      
    export default RoundButtons;
    