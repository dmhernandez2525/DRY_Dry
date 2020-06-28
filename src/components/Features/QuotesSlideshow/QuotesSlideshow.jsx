
    import React from "react";
    
    import "./QuotesSlideshow.scss";
    
    const QuotesSlideshow = ({
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
        <div onClick={() => onClick("DryQuotesSlideshow")}
          className="dry-quotesSlideshow">
          DryQuotesSlideshow

        </div>
    );
    };
    
    QuotesSlideshow.defaultProps = {
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
      
    export default QuotesSlideshow;
    