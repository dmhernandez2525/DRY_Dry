
    import React from "react";
    
    import "./SubnavigationMenu.scss";
    
    const SubnavigationMenu = ({
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
        <div onClick={() => onClick("DrySubnavigationMenu")}
          className="dry-subnavigationMenu">
          DrySubnavigationMenu

        </div>
    );
    };
    
    SubnavigationMenu.defaultProps = {
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
      
    export default SubnavigationMenu;
    