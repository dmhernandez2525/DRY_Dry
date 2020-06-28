
    import React from "react";
    
    import "./OutlineButtons.scss";
    
    const OutlineButtons = ({
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
        <div onClick={() => onClick("DryOutlineButtons")}
          className="dry-outlineButtons">
          DryOutlineButtons

        </div>
    );
    };
    
    OutlineButtons.defaultProps = {
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
      
    export default OutlineButtons;
    