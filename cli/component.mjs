const component = (input, lowerCaseInput) => {
  const displayComponent = `
    import React from "react";
    
    import "./${input}.scss";
    
    const ${input} = ({
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
        <div onClick={() => onClick("Dry${input}")}
          className="dry-${lowerCaseInput}">
          Dry${input}

        </div>
    );
    };
    
    ${input}.defaultProps = {
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
      
    export default ${input};
    `;

  return displayComponent;
};

export default component;
