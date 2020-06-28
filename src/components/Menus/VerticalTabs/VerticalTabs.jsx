
    import React from "react";
    
    import "./VerticalTabs.scss";
    
    const VerticalTabs = ({
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
        <div onClick={() => onClick("DryVerticalTabs")}
          className="dry-verticalTabs">
          DryVerticalTabs

        </div>
    );
    };
    
    VerticalTabs.defaultProps = {
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
      
    export default VerticalTabs;
    