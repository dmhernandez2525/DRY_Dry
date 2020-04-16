import React, { useState } from "react";
import classnames from "classnames";

import "./SpotlightGallery.scss";

const SpotlightGallery = ({ images }) => {
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

  const [active, setActive] = useState(0);
  const panels = Object.values(images).length;
  let buttons;

  const handleSlide = (slide, direction) => {
    if (direction === "left") {
      if (slide === 0) {
        setActive(panels - 1);
      } else {
        setActive(slide - 1);
      }
    } else {
      if (slide === panels - 1) {
        setActive(0);
      } else {
        setActive(slide + 1);
      }
    }
  };
  let display = (
    <div>
      <span>Valid props where not pased</span>
    </div>
  );

  if (images) {
    buttons = [];

    const imagePanels = [];
    Object.values(images).forEach((photo, i) => {
      buttons.push(
        <div
          key={`button${i}`}
          onClick={() => setActive(i)}
          className={classnames({
            "gallery__bottom-nav": true,
            "gallery__bottom-nav--active": active === i
          })}
        ></div>
      );

      imagePanels.push(
        <div
          className={classnames({
            gallery__panel: true,
            "gallery__panel--active": active === i
          })}
          key={`panel${i}`}
          id={i}
        >
          <div
            onClick={() => handleSlide(i, "left")}
            className={classnames({
              "gallery__left-icon": true,
              "gallery__left-icon--active": active === i
            })}
          >
            {`<=`}
          </div>
          <div
            onClick={() => handleSlide(i, "right")}
            className={classnames({
              "gallery__right-icon": true,
              "gallery__right-icon--active": active === i
            })}
          >
            =>
          </div>
          <img className="gallery__image" src={photo.picUrl} />
          <p className="gallery__text">{photo.comment}</p>
        </div>
      );
    });

    display = (
      <div className="gallery__wrapper">
        {imagePanels}
        <div className="gallery__button-wrapper">{buttons}</div>
      </div>
    );
  }

  return <div className="gallery">{display}</div>;
};

export default SpotlightGallery;
