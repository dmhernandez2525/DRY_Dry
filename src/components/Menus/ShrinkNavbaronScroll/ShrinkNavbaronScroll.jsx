
    import React from "react";
    
    import "./ShrinkNavbaronScroll.scss";
    
    const ShrinkNavbaronScroll = ({
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
        <div onClick={() => onClick("DryShrinkNavbaronScroll")}
          className="dry-shrinkNavbaronScroll">
          DryShrinkNavbaronScroll

        </div>
    );
    };
    
    ShrinkNavbaronScroll.defaultProps = {
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
      
    export default ShrinkNavbaronScroll;
    