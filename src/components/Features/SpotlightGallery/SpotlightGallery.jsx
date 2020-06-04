import React, { useState } from "react";
import classnames from "classnames";

import "./SpotlightGallery.scss";

const SpotlightGallery = ({
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
  images
}) => {
  // EXAMPLE INPUT
  //   images:{
  //     img1: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     img2: {
  //         picUrl:"https://ca.slack-edge.com/T03GU501J-UJYKQ3PT8-83706a22bf58-512",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     img3: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     }
  // }

  let display = (
    <div>
      <span>Valid props where not pased</span>
    </div>
  );

  if (images) {
    display = Object.values(images).map((images, i) => {
      return (
        <div key={`${images.comment}${i}`}>
          <img src={images.picUrl} alt="" />
          <span>{images.comment}</span>
        </div>
      );
    });
  }
  return <div className="dry-spotlightGallery">{display}</div>;
};

SpotlightGallery.defaultProps = {
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

export default SpotlightGallery;
