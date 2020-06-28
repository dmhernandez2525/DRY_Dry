
    import React from "react";
    
    import "./SkillBar.scss";
    
    const SkillBar = ({
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
        <div onClick={() => onClick("DrySkillBar")}
          className="dry-skillBar">
          DrySkillBar

        </div>
    );
    };
    
    SkillBar.defaultProps = {
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
      
    export default SkillBar;
    