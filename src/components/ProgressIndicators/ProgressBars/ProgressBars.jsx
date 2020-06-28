
    import React from "react";
    
    import "./ProgressBars.scss";
    
    const ProgressBars = ({
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
        <div onClick={() => onClick("DryProgressBars")}
          className="dry-progressBars">
          DryProgressBars

        </div>
    );
    };
    
    ProgressBars.defaultProps = {
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
      
    export default ProgressBars;
    