
    import React from "react";
    
    import "./ReadMoreReadLess.scss";
    
    const ReadMoreReadLess = ({
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
        <div onClick={() => onClick("DryReadMoreReadLess")}
          className="dry-readMoreReadLess">
          DryReadMoreReadLess

        </div>
    );
    };
    
    ReadMoreReadLess.defaultProps = {
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
      
    export default ReadMoreReadLess;
    