
    import React from "react";
    
    import "./NextprevButtons.scss";
    
    const NextprevButtons = ({
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
        <div onClick={() => onClick("DryNextprevButtons")}
          className="dry-nextprevButtons">
          DryNextprevButtons

        </div>
    );
    };
    
    NextprevButtons.defaultProps = {
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
      
    export default NextprevButtons;
    