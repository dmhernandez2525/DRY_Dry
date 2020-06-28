
    import React from "react";
    
    import "./FixedSidebar.scss";
    
    const FixedSidebar = ({
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
        <div onClick={() => onClick("DryFixedSidebar")}
          className="dry-fixedSidebar">
          DryFixedSidebar

        </div>
    );
    };
    
    FixedSidebar.defaultProps = {
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
      
    export default FixedSidebar;
    