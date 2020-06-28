
    import React from "react";
    
    import "./LoadingButtons.scss";
    
    const LoadingButtons = ({
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
        <div onClick={() => onClick("DryLoadingButtons")}
          className="dry-loadingButtons">
          DryLoadingButtons

        </div>
    );
    };
    
    LoadingButtons.defaultProps = {
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
      
    export default LoadingButtons;
    