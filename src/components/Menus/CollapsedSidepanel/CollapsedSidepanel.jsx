
    import React from "react";
    
    import "./CollapsedSidepanel.scss";
    
    const CollapsedSidepanel = ({
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
        <div onClick={() => onClick("DryCollapsedSidepanel")}
          className="dry-collapsedSidepanel">
          DryCollapsedSidepanel

        </div>
    );
    };
    
    CollapsedSidepanel.defaultProps = {
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
      
    export default CollapsedSidepanel;
    