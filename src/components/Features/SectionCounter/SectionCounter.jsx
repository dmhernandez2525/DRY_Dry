
    import React from "react";
    
    import "./SectionCounter.scss";
    
    const SectionCounter = ({
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
        <div onClick={() => onClick("DrySectionCounter")}
          className="dry-sectionCounter">
          DrySectionCounter

        </div>
    );
    };
    
    SectionCounter.defaultProps = {
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
      
    export default SectionCounter;
    