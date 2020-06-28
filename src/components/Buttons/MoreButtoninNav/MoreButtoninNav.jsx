
    import React from "react";
    
    import "./MoreButtoninNav.scss";
    
    const MoreButtoninNav = ({
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
        <div onClick={() => onClick("DryMoreButtoninNav")}
          className="dry-moreButtoninNav">
          DryMoreButtoninNav

        </div>
    );
    };
    
    MoreButtoninNav.defaultProps = {
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
      
    export default MoreButtoninNav;
    