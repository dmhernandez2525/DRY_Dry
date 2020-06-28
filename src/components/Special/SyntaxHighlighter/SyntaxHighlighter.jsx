
    import React from "react";
    
    import "./SyntaxHighlighter.scss";
    
    const SyntaxHighlighter = ({
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
        <div onClick={() => onClick("DrySyntaxHighlighter")}
          className="dry-syntaxHighlighter">
          DrySyntaxHighlighter

        </div>
    );
    };
    
    SyntaxHighlighter.defaultProps = {
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
      
    export default SyntaxHighlighter;
    