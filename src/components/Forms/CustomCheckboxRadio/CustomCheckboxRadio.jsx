
    import React from "react";
    
    import "./CustomCheckboxRadio.scss";
    
    const CustomCheckboxRadio = ({
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
        <div onClick={() => onClick("DryCustomCheckboxRadio")}
          className="dry-customCheckboxRadio">
          DryCustomCheckboxRadio

        </div>
    );
    };
    
    CustomCheckboxRadio.defaultProps = {
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
      
    export default CustomCheckboxRadio;
    