import Reaact from "react";

import "./Pricing.scss";

const Pricing = rows => {
  // EXAMPLE INPUT
  //   rows:{
  //     row1: {
  //         name: "Free",
  //         price: 0,
  //         details: [
  //             "Curabitur eu eros et risus rutrum elementum.",
  //             "Phasellus a quam lobortis magna viverra tempus.",
  //             "Sed dictum nibh porttitor aliquet pulvinar.",
  //             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
  //         ]
  //     },
  //     row2: {
  //         name: "Plus",
  //         price: 9,
  //         details: [
  //             "Curabitur eu eros et risus rutrum elementum.",
  //             "Phasellus a quam lobortis magna viverra tempus.",
  //             "Sed dictum nibh porttitor aliquet pulvinar.",
  //             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
  //             "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
  //             "Nullam quis eros ac eros cursus tempor a quis lorem.",
  //         ]
  //     },
  //     row3: {
  //         name: "Pro",
  //         price: 20,
  //         details: [
  //             "Curabitur eu eros et risus rutrum elementum.",
  //             "Phasellus a quam lobortis magna viverra tempus.",
  //             "Sed dictum nibh porttitor aliquet pulvinar.",
  //             "Pellentesque vestibulum erat eu ex laoreet volutpat.",
  //             "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
  //             "Nullam quis eros ac eros cursus tempor a quis lorem.",
  //             "Proin vel nisi sed mauris tristique tincidunt vulputate sit amet nulla.",
  //             "Phasellus vulputate nisi in libero euismod, lacinia mattis ligula cursus.",
  //             "Donec porta enim vitae mollis bibendum.",
  //             "Fusce in erat id diam porttitor pellentesque et non tortor."
  //         ]
  //     }
  // }

  const display = Object.values(rows).map(plan => {
    plan = Object.values(plan)[0];
    let rowDetails = plan.details.map(detail => {
      return <li key={`${plan.name}:${detail}`}>{detail}</li>;
    });
    return (
      <div key={plan.name}>
        <div>
          <span>{plan.name}</span>
          <span>{plan.price}</span>
        </div>
        <ul>{rowDetails}</ul>
      </div>
    );
  });
  return <div>{display}</div>;
};

export default Pricing;
