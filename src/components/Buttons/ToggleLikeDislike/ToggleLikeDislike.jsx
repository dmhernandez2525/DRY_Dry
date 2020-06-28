
    import React from "react";
    
    import "./ToggleLikeDislike.scss";
    
    const ToggleLikeDislike = ({
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
        <div onClick={() => onClick("DryToggleLikeDislike")}
          className="dry-toggleLikeDislike">
          DryToggleLikeDislike

        </div>
    );
    };
    
    ToggleLikeDislike.defaultProps = {
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
      
    export default ToggleLikeDislike;
    