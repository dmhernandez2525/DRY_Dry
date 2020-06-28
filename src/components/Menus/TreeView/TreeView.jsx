
    import React from "react";
    
    import "./TreeView.scss";
    
    const TreeView = ({
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
        <div onClick={() => onClick("DryTreeView")}
          className="dry-treeView">
          DryTreeView

        </div>
    );
    };
    
    TreeView.defaultProps = {
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
      
    export default TreeView;
    