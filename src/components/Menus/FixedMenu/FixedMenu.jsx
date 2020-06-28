
    import React from "react";
    
    import "./FixedMenu.scss";
    
    const FixedMenu = ({
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
        <div onClick={() => onClick("DryFixedMenu")}
          className="dry-fixedMenu">
          DryFixedMenu

        </div>
    );
    };
    
    FixedMenu.defaultProps = {
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
      
    export default FixedMenu;
    