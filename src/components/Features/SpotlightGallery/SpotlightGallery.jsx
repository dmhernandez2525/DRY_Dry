import React from "react";

import "./SpotlightGallery.scss";

const SpotlightGallery = ({ images }) => {
  // EXAMPLE INPUT
  //   images:{
  //     img1: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     img2: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     },
  //     img3: {
  //         picUrl:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         comment: "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
  //     }
  // }

  let display = Object.values(images).map((photo, i) => {
    return (
      <div key={i}>
        <img src={photo.picUrl} />
        <p>{photo.comment}</p>
      </div>
    );
  });
  return <div>{display}</div>;
};

export default SpotlightGallery;
