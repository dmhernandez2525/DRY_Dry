
    import React from "react";
    
    import "./ShrinkHeaderOnScroll.scss";
    
    const ShrinkHeaderOnScroll = ({
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
        <div onClick={() => onClick("DryShrinkHeaderOnScroll")}
          className="dry-shrinkHeaderOnScroll">
          DryShrinkHeaderOnScroll

        </div>
    );
    };
    
    ShrinkHeaderOnScroll.defaultProps = {
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
      
    export default ShrinkHeaderOnScroll;
    