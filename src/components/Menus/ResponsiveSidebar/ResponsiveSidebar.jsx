
    import React from "react";
    
    import "./ResponsiveSidebar.scss";
    
    const ResponsiveSidebar = ({
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
        <div onClick={() => onClick("DryResponsiveSidebar")}
          className="dry-responsiveSidebar">
          DryResponsiveSidebar

        </div>
    );
    };
    
    ResponsiveSidebar.defaultProps = {
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
      
    export default ResponsiveSidebar;
    