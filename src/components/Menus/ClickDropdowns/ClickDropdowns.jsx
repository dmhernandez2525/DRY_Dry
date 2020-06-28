
    import React from "react";
    
    import "./ClickDropdowns.scss";
    
    const ClickDropdowns = ({
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
        <div onClick={() => onClick("DryClickDropdowns")}
          className="dry-clickDropdowns">
          DryClickDropdowns

        </div>
    );
    };
    
    ClickDropdowns.defaultProps = {
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
      
    export default ClickDropdowns;
    