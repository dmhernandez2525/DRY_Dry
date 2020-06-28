
    import React from "react";
    
    import "./FullPageTabs.scss";
    
    const FullPageTabs = ({
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
        <div onClick={() => onClick("DryFullPageTabs")}
          className="dry-fullPageTabs">
          DryFullPageTabs

        </div>
    );
    };
    
    FullPageTabs.defaultProps = {
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
      
    export default FullPageTabs;
    