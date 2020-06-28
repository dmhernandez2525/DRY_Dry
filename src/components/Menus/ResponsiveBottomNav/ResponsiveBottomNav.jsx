
    import React from "react";
    
    import "./ResponsiveBottomNav.scss";
    
    const ResponsiveBottomNav = ({
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
        <div onClick={() => onClick("DryResponsiveBottomNav")}
          className="dry-responsiveBottomNav">
          DryResponsiveBottomNav

        </div>
    );
    };
    
    ResponsiveBottomNav.defaultProps = {
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
      
    export default ResponsiveBottomNav;
    