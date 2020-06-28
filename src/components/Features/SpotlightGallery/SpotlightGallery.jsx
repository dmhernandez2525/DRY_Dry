
    import React from "react";
    
    import "./SpotlightGallery.scss";
    
    const SpotlightGallery = ({
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
        <div onClick={() => onClick("DrySpotlightGallery")}
          className="dry-spotlightGallery">
          DrySpotlightGallery

        </div>
    );
    };
    
    SpotlightGallery.defaultProps = {
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
      
    export default SpotlightGallery;
    