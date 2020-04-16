import React from "react";

import "./Hours.scss";

const Hours = ({ days }) => {
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
  let display = Object.keys(days).map(day => {
    let currentDay = this.data[day];
    return <li key={day}>{`${day}:${currentDay.from}-${currentDay.to}`}</li>;
  });
  return <div>{display}</div>;
};

export default Hours;
