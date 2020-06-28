
    import React from "react";
    
    import "./FormWithIcons.scss";
    
    const FormWithIcons = ({
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
        <div onClick={() => onClick("DryFormWithIcons")}
          className="dry-formWithIcons">
          DryFormWithIcons

        </div>
    );
    };
    
    FormWithIcons.defaultProps = {
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
      
    export default FormWithIcons;
    