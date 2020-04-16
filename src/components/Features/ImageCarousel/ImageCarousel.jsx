import React from "react";

import "./ImageCarousel.scss";

const ImageCarousel = ({ slides }) => {
  // EXAMPLE INPUT
  //   data:{
  //     slide1: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     slide2: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     slide3: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         title: "Hey",
  //         detail: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     }
  // }

  let display = Object.values(slides).map((slide, i) => {
    return (
      <div key={`${slide.title}${i}`}>
        <span>{slide.title}</span>
        <span>{slide.detail}</span>
      </div>
    );
  });
  return <div>{display}</div>;
};

export default ImageCarousel;
