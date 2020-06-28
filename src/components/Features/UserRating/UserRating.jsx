
    import React from "react";
    
    import "./UserRating.scss";
    
    const UserRating = ({
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
        <div onClick={() => onClick("DryUserRating")}
          className="dry-userRating">
          DryUserRating

        </div>
    );
    };
    
    UserRating.defaultProps = {
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
      
    export default UserRating;
    