
    import React from "react";
    
    import "./SideNavigation.scss";
    
    const SideNavigation = ({
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
        <div onClick={() => onClick("DrySideNavigation")}
          className="dry-sideNavigation">
          DrySideNavigation

        </div>
    );
    };
    
    SideNavigation.defaultProps = {
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
      
    export default SideNavigation;
    