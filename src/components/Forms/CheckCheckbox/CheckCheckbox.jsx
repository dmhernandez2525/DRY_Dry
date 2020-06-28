
    import React from "react";
    
    import "./CheckCheckbox.scss";
    
    const CheckCheckbox = ({
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
        <div onClick={() => onClick("DryCheckCheckbox")}
          className="dry-checkCheckbox">
          DryCheckCheckbox

        </div>
    );
    };
    
    CheckCheckbox.defaultProps = {
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
      
    export default CheckCheckbox;
    