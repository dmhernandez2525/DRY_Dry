
    import React from "react";
    
    import "./SideSheet.scss";
    
    const SideSheet = ({
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
        <div onClick={() => onClick("DrySideSheet")}
          className="dry-sideSheet">
          DrySideSheet

        </div>
    );
    };
    
    SideSheet.defaultProps = {
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
      
    export default SideSheet;
    