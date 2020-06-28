
    import React from "react";
    
    import "./DropdownMenu.scss";
    
    const DropdownMenu = ({
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
        <div onClick={() => onClick("DryDropdownMenu")}
          className="dry-dropdownMenu">
          DryDropdownMenu

        </div>
    );
    };
    
    DropdownMenu.defaultProps = {
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
      
    export default DropdownMenu;
    