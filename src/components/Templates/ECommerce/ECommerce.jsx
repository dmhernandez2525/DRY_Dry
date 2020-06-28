
    import React from "react";
    
    import "./ECommerce.scss";
    
    const ECommerce = ({
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
        <div onClick={() => onClick("DryECommerce")}
          className="dry-eCommerce">
          DryECommerce

        </div>
    );
    };
    
    ECommerce.defaultProps = {
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
      
    export default ECommerce;
    