
    import React from "react";
    
    import "./FlipCard.scss";
    
    const FlipCard = ({
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
        <div onClick={() => onClick("DryFlipCard")}
          className="dry-flipCard">
          DryFlipCard

        </div>
    );
    };
    
    FlipCard.defaultProps = {
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
      
    export default FlipCard;
    