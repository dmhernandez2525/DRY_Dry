
    import React from "react";
    
    import "./CurtainMenu.scss";
    
    const CurtainMenu = ({
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
        <div onClick={() => onClick("DryCurtainMenu")}
          className="dry-curtainMenu">
          DryCurtainMenu

        </div>
    );
    };
    
    CurtainMenu.defaultProps = {
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
      
    export default CurtainMenu;
    