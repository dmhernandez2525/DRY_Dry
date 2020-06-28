
    import React from "react";
    
    import "./Testimonials.scss";
    
    const Testimonials = ({
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
        <div onClick={() => onClick("DryTestimonials")}
          className="dry-testimonials">
          DryTestimonials

        </div>
    );
    };
    
    Testimonials.defaultProps = {
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
      
    export default Testimonials;
    