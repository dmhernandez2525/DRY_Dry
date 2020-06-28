
    import React from "react";
    
    import "./StickyHeader.scss";
    
    const StickyHeader = ({
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
        <div onClick={() => onClick("DryStickyHeader")}
          className="dry-stickyHeader">
          DryStickyHeader

        </div>
    );
    };
    
    StickyHeader.defaultProps = {
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
      
    export default StickyHeader;
    