
    import React from "react";
    
    import "./ResponsiveHeader.scss";
    
    const ResponsiveHeader = ({
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
        <div onClick={() => onClick("DryResponsiveHeader")}
          className="dry-responsiveHeader">
          DryResponsiveHeader

        </div>
    );
    };
    
    ResponsiveHeader.defaultProps = {
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
      
    export default ResponsiveHeader;
    