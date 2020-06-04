import React from "react";
import Icons from "../../Icon/Icons";
import Icon from "../../Icon";

import "./Pricing.scss";

const Pricing = ({
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
  rows
}) => {
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

  let display = (
    <div>
      <span>Valid props where not pased</span>
    </div>
  );

  if (rows) {
    display = Object.values(rows).map(plan => {
      let rowDetails = plan.details.map(detail => {
        return (
          <div className="dry-pricing__detail" key={`${plan.name}:${detail}`}>
            <Icon icon="checkmark4" height="20px" />
            {detail}
          </div>
        );
      });
      return (
        <div className="dry-pricing__main-wrapper" key={plan.name}>
          <div className="dry-pricing__header-wrapper">
            <div className="dry-pricing__name-wrapper">
              <span>{plan.name}</span>
            </div>
            <div className="dry-pricing__price-wrapper">
              <span className="dry-pricing__price">{`$${plan.price}`}</span>
              <span>/month</span>
            </div>
          </div>
          <div className="dry-pricing__detail-wrapper">{rowDetails}</div>
        </div>
      );
    });
  }
  return (
    <div className="dry-pricing">
      <Icons />
      {display}
    </div>
  );
};

Pricing.defaultProps = {
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

export default Pricing;
