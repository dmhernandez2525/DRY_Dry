
    import React from "react";
    
    import "./VerticalButtonGroup.scss";
    
    const VerticalButtonGroup = ({
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
        <div onClick={() => onClick("DryVerticalButtonGroup")}
          className="dry-verticalButtonGroup">
          DryVerticalButtonGroup

        </div>
    );
    };
    
    VerticalButtonGroup.defaultProps = {
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
      
    export default VerticalButtonGroup;
    