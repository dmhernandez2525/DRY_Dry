
    import React from "react";
    
    import "./TopNavigation.scss";
    
    const TopNavigation = ({
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
        <div onClick={() => onClick("DryTopNavigation")}
          className="dry-topNavigation">
          DryTopNavigation

        </div>
    );
    };
    
    TopNavigation.defaultProps = {
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
      
    export default TopNavigation;
    