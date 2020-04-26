import React from "react";

import "./Hours.scss";

const Hours = ({
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
  passProps,
  days
}) => {
  // EXAMPLE INPUT
  //   days:{
  //      Monday:{from:"10am",to:"10pm"},
  //      Tuesday:{from:"10am",to:"10pm"},
  //      Wednesday:{from:"10am",to:"10pm"},
  //      Thursday:{from:"10am",to:"10pm"},
  //      Friday:{from:"10am",to:"10pm"},
  //      Saturday:{from:"10am",to:"10pm"},
  //      Sunday:{from:"10am",to:"10pm"}
  //   }
  let display = (
    <div>
      <span>Valid props where not pased</span>
    </div>
  );

  if (days) {
    display = Object.keys(days).map(day => {
      let currentDay = days[day];
      return <li key={day}>{`${day}:${currentDay.from}-${currentDay.to}`}</li>;
    });
  }
  return (
    <div onClick={() => onClick("DryHours")} className="dry-hours">
      {display}
    </div>
  );
};

Hours.defaultProps = {
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

export default Hours;
