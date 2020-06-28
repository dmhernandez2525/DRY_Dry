
    import React from "react";
    
    import "./NavbarWithIcons.scss";
    
    const NavbarWithIcons = ({
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
        <div onClick={() => onClick("DryNavbarWithIcons")}
          className="dry-navbarWithIcons">
          DryNavbarWithIcons

        </div>
    );
    };
    
    NavbarWithIcons.defaultProps = {
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
      
    export default NavbarWithIcons;
    