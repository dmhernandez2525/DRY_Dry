
    import React from "react";
    
    import "./SocialLoginForm.scss";
    
    const SocialLoginForm = ({
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
        <div onClick={() => onClick("DrySocialLoginForm")}
          className="dry-socialLoginForm">
          DrySocialLoginForm

        </div>
    );
    };
    
    SocialLoginForm.defaultProps = {
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
      
    export default SocialLoginForm;
    