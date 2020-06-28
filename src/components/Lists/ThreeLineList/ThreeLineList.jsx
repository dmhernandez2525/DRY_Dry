
    import React from "react";
    
    import "./ThreeLineList.scss";
    
    const ThreeLineList = ({
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
        <div onClick={() => onClick("DryThreeLineList")}
          className="dry-threeLineList">
          DryThreeLineList

        </div>
    );
    };
    
    ThreeLineList.defaultProps = {
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
      
    export default ThreeLineList;
    