
    import React from "react";
    
    import "./ToDoList.scss";
    
    const ToDoList = ({
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
        <div onClick={() => onClick("DryToDoList")}
          className="dry-toDoList">
          DryToDoList

        </div>
    );
    };
    
    ToDoList.defaultProps = {
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
      
    export default ToDoList;
    