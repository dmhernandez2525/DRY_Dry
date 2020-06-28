
    import React from "react";
    
    import "./Snackbar.scss";
    
    const Snackbar = ({
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
        <div onClick={() => onClick("DrySnackbar")}
          className="dry-snackbar">
          DrySnackbar

        </div>
    );
    };
    
    Snackbar.defaultProps = {
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
      
    export default Snackbar;
    