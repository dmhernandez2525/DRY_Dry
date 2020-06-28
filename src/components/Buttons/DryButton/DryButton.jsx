
    import React from "react";
    
    import "./DryButton.scss";
    
    const DryButton = ({
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
        <div onClick={() => onClick("DryDryButton")}
          className="dry-dryButton">
          DryDryButton

        </div>
    );
    };
    
    DryButton.defaultProps = {
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
      
    export default DryButton;
    