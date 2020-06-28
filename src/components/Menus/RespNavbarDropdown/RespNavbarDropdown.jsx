
    import React from "react";
    
    import "./RespNavbarDropdown.scss";
    
    const RespNavbarDropdown = ({
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
        <div onClick={() => onClick("DryRespNavbarDropdown")}
          className="dry-respNavbarDropdown">
          DryRespNavbarDropdown

        </div>
    );
    };
    
    RespNavbarDropdown.defaultProps = {
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
      
    export default RespNavbarDropdown;
    