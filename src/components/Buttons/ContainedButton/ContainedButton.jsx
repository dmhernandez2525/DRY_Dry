
    import React from "react";
    
    import "./ContainedButton.scss";
    
    const ContainedButton = ({
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
        <div onClick={() => onClick("DryContainedButton")}
          className="dry-containedButton">
          DryContainedButton

        </div>
    );
    };
    
    ContainedButton.defaultProps = {
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
      
    export default ContainedButton;
    