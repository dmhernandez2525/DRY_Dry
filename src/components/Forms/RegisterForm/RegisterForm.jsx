
    import React from "react";
    
    import "./RegisterForm.scss";
    
    const RegisterForm = ({
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
        <div onClick={() => onClick("DryRegisterForm")}
          className="dry-registerForm">
          DryRegisterForm

        </div>
    );
    };
    
    RegisterForm.defaultProps = {
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
      
    export default RegisterForm;
    