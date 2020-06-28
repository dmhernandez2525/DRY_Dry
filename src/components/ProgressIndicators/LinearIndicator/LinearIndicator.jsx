
    import React from "react";
    
    import "./LinearIndicator.scss";
    
    const LinearIndicator = ({
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
        <div onClick={() => onClick("DryLinearIndicator")}
          className="dry-linearIndicator">
          DryLinearIndicator

        </div>
    );
    };
    
    LinearIndicator.defaultProps = {
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
      
    export default LinearIndicator;
    