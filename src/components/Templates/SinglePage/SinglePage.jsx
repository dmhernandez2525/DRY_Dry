
    import React from "react";
    
    import "./SinglePage.scss";
    
    const SinglePage = ({
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
        <div onClick={() => onClick("DrySinglePage")}
          className="dry-singlePage">
          DrySinglePage

        </div>
    );
    };
    
    SinglePage.defaultProps = {
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
      
    export default SinglePage;
    