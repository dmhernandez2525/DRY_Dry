
    import React from "react";
    
    import "./Flowershop.scss";
    
    const Flowershop = ({
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
        <div onClick={() => onClick("DryFlowershop")}
          className="dry-flowershop">
          DryFlowershop

        </div>
    );
    };
    
    Flowershop.defaultProps = {
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
      
    export default Flowershop;
    