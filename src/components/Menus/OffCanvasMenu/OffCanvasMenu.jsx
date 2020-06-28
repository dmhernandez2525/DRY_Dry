
    import React from "react";
    
    import "./OffCanvasMenu.scss";
    
    const OffCanvasMenu = ({
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
        <div onClick={() => onClick("DryOffCanvasMenu")}
          className="dry-offCanvasMenu">
          DryOffCanvasMenu

        </div>
    );
    };
    
    OffCanvasMenu.defaultProps = {
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
      
    export default OffCanvasMenu;
    