
    import React from "react";
    
    import "./InlineForm.scss";
    
    const InlineForm = ({
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
        <div onClick={() => onClick("DryInlineForm")}
          className="dry-inlineForm">
          DryInlineForm

        </div>
    );
    };
    
    InlineForm.defaultProps = {
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
      
    export default InlineForm;
    