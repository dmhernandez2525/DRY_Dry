
    import React from "react";
    
    import "./Headers1.scss";
    
    const Headers1 = ({
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
        <div onClick={() => onClick("DryHeaders1")}
          className="dry-headers1">
          DryHeaders1

        </div>
    );
    };
    
    Headers1.defaultProps = {
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
      
    export default Headers1;
    