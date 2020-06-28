
    import React from "react";
    
    import "./SlideDownBaronScroll.scss";
    
    const SlideDownBaronScroll = ({
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
        <div onClick={() => onClick("DrySlideDownBaronScroll")}
          className="dry-slideDownBaronScroll">
          DrySlideDownBaronScroll

        </div>
    );
    };
    
    SlideDownBaronScroll.defaultProps = {
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
      
    export default SlideDownBaronScroll;
    