
    import React from "react";
    
    import "./StarRating.scss";
    
    const StarRating = ({
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
        <div onClick={() => onClick("DryStarRating")}
          className="dry-starRating">
          DryStarRating

        </div>
    );
    };
    
    StarRating.defaultProps = {
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
      
    export default StarRating;
    