
    import React from "react";
    
    import "./Coupon.scss";
    
    const Coupon = ({
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
        <div onClick={() => onClick("DryCoupon")}
          className="dry-coupon">
          DryCoupon

        </div>
    );
    };
    
    Coupon.defaultProps = {
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
      
    export default Coupon;
    