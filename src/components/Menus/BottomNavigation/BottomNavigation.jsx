
    import React from "react";
    
    import "./BottomNavigation.scss";
    
    const BottomNavigation = ({
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
        <div onClick={() => onClick("DryBottomNavigation")}
          className="dry-bottomNavigation">
          DryBottomNavigation

        </div>
    );
    };
    
    BottomNavigation.defaultProps = {
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
      
    export default BottomNavigation;
    