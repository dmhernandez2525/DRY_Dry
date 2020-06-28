
    import React from "react";
    
    import "./ImageCarousel.scss";
    
    const ImageCarousel = ({
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
        <div onClick={() => onClick("DryImageCarousel")}
          className="dry-imageCarousel">
          DryImageCarousel

        </div>
    );
    };
    
    ImageCarousel.defaultProps = {
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
      
    export default ImageCarousel;
    