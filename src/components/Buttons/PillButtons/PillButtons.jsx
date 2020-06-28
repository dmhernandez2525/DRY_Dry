
    import React from "react";
    
    import "./PillButtons.scss";
    
    const PillButtons = ({
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
        <div onClick={() => onClick("DryPillButtons")}
          className="dry-pillButtons">
          DryPillButtons

        </div>
    );
    };
    
    PillButtons.defaultProps = {
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
      
    export default PillButtons;
    