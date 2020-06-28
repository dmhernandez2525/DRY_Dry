
    import React from "react";
    
    import "./DraggableHTMLElement.scss";
    
    const DraggableHTMLElement = ({
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
        <div onClick={() => onClick("DryDraggableHTMLElement")}
          className="dry-draggableHTMLElement">
          DryDraggableHTMLElement

        </div>
    );
    };
    
    DraggableHTMLElement.defaultProps = {
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
      
    export default DraggableHTMLElement;
    