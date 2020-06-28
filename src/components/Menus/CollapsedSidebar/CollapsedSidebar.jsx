
    import React from "react";
    
    import "./CollapsedSidebar.scss";
    
    const CollapsedSidebar = ({
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
        <div onClick={() => onClick("DryCollapsedSidebar")}
          className="dry-collapsedSidebar">
          DryCollapsedSidebar

        </div>
    );
    };
    
    CollapsedSidebar.defaultProps = {
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
      
    export default CollapsedSidebar;
    