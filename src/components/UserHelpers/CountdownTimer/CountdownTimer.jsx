
    import React from "react";
    
    import "./CountdownTimer.scss";
    
    const CountdownTimer = ({
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
        <div onClick={() => onClick("DryCountdownTimer")}
          className="dry-countdownTimer">
          DryCountdownTimer

        </div>
    );
    };
    
    CountdownTimer.defaultProps = {
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
      
    export default CountdownTimer;
    