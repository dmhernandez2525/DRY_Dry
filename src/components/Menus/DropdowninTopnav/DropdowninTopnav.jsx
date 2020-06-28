
    import React from "react";
    
    import "./DropdowninTopnav.scss";
    
    const DropdowninTopnav = ({
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
        <div onClick={() => onClick("DryDropdowninTopnav")}
          className="dry-dropdowninTopnav">
          DryDropdowninTopnav

        </div>
    );
    };
    
    DropdowninTopnav.defaultProps = {
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
      
    export default DropdowninTopnav;
    