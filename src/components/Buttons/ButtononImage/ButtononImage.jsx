
    import React from "react";
    
    import "./ButtononImage.scss";
    
    const ButtononImage = ({
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
        <div onClick={() => onClick("DryButtononImage")}
          className="dry-buttononImage">
          DryButtononImage

        </div>
    );
    };
    
    ButtononImage.defaultProps = {
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
      
    export default ButtononImage;
    