
    import React from "react";
    
    import "./CenteredMenuLink.scss";
    
    const CenteredMenuLink = ({
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
        <div onClick={() => onClick("DryCenteredMenuLink")}
          className="dry-centeredMenuLink">
          DryCenteredMenuLink

        </div>
    );
    };
    
    CenteredMenuLink.defaultProps = {
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
      
    export default CenteredMenuLink;
    