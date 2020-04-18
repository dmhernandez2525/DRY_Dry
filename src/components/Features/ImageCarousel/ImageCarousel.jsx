import React, { useState } from "react";
import classnames from "classnames";

import "./ImageCarousel.scss";

const ImageCarousel = ({ slides }) => {
  // EXAMPLE INPUT
  //   slides:{
  //     slide1: {
  //         picUrl:"https://files.slack.com/files-pri/TL86V04VD-F011FMTHEAY/hero.jpg",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     slide2: {
  //         picUrl:"https://files.slack.com/files-pri/TL86V04VD-F011AGVNC2V/comfortorderlogo.png",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     slide3: {
  //         picUrl:"https://image.shutterstock.com/z/stock-photo-a-deer-in-the-colors-of-a-foggy-morning-1508990603.jpg",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     }
  // }

  const [active, setActive] = useState(0);
  const panels = Object.values(slides).length;
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

  if (slides) {
    buttons = [];

    const imagePanels = [];
    Object.values(slides).forEach((slide, i) => {
      buttons.push(
        <div
          key={`button${i}`}
          onClick={() => setActive(i)}
          className={classnames({
            "gallery__bottom-nav": true,
            "gallery__bottom-nav-last": i === panels - 1,
            "gallery__bottom-nav--active": active === i
          })}
        ></div>
      );

      imagePanels.push(
        <div
          style={{ backgroundImage: `url(${slide.picUrl})` }}
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
          <span className="gallery__title">{slide.title}</span>
          <span className="gallery__text">{slide.detail}</span>
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

export default ImageCarousel;
