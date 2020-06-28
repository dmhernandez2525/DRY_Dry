
    import React from "react";
    
    import "./SplitButtons.scss";
    
    const SplitButtons = ({
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
        <div onClick={() => onClick("DrySplitButtons")}
          className="dry-splitButtons">
          DrySplitButtons

        </div>
    );
    };
    
    SplitButtons.defaultProps = {
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
      
    export default SplitButtons;
    