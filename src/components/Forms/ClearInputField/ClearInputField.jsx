
    import React from "react";
    
    import "./ClearInputField.scss";
    
    const ClearInputField = ({
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
        <div onClick={() => onClick("DryClearInputField")}
          className="dry-clearInputField">
          DryClearInputField

        </div>
    );
    };
    
    ClearInputField.defaultProps = {
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
      
    export default ClearInputField;
    