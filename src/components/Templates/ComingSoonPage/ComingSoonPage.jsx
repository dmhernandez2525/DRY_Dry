
    import React from "react";
    
    import "./ComingSoonPage.scss";
    
    const ComingSoonPage = ({
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
        <div onClick={() => onClick("DryComingSoonPage")}
          className="dry-comingSoonPage">
          DryComingSoonPage

        </div>
    );
    };
    
    ComingSoonPage.defaultProps = {
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
      
    export default ComingSoonPage;
    