
    import React from "react";
    
    import "./RightAlignedMenuLinks.scss";
    
    const RightAlignedMenuLinks = ({
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
        <div onClick={() => onClick("DryRightAlignedMenuLinks")}
          className="dry-rightAlignedMenuLinks">
          DryRightAlignedMenuLinks

        </div>
    );
    };
    
    RightAlignedMenuLinks.defaultProps = {
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
      
    export default RightAlignedMenuLinks;
    