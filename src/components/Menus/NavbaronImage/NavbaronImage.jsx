
    import React from "react";
    
    import "./NavbaronImage.scss";
    
    const NavbaronImage = ({
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
        <div onClick={() => onClick("DryNavbaronImage")}
          className="dry-navbaronImage">
          DryNavbaronImage

        </div>
    );
    };
    
    NavbaronImage.defaultProps = {
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
      
    export default NavbaronImage;
    