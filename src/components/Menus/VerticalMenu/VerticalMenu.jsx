
    import React from "react";
    
    import "./VerticalMenu.scss";
    
    const VerticalMenu = ({
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
        <div onClick={() => onClick("DryVerticalMenu")}
          className="dry-verticalMenu">
          DryVerticalMenu

        </div>
    );
    };
    
    VerticalMenu.defaultProps = {
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
      
    export default VerticalMenu;
    