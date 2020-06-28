
    import React from "react";
    
    import "./NavigationDrawer.scss";
    
    const NavigationDrawer = ({
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
        <div onClick={() => onClick("DryNavigationDrawer")}
          className="dry-navigationDrawer">
          DryNavigationDrawer

        </div>
    );
    };
    
    NavigationDrawer.defaultProps = {
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
      
    export default NavigationDrawer;
    