
    import React from "react";
    
    import "./Typewriter.scss";
    
    const Typewriter = ({
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
        <div onClick={() => onClick("DryTypewriter")}
          className="dry-typewriter">
          DryTypewriter

        </div>
    );
    };
    
    Typewriter.defaultProps = {
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
      
    export default Typewriter;
    