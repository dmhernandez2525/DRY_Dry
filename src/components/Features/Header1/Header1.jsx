import React from "react";

import "./Header1.scss";

const Header1 = ({
  backGroundUrl = "https://files.slack.com/files-pri/TL86V04VD-F011FMTHEAY/hero.jpg",
  co1 = "15,40,98,0.8",
  co2 = "9,31,54,0.8",
  cla = "Def",
  logUrl = "https://files.slack.com/files-pri/TL86V04VD-F011AGVNC2V/comfortorderlogo.png",
  headingMain = "Comfort Order",
  headingSub = "high end applactions for all"
}) => {
  const styles = {
    backgroundImage: ` linear-gradient(
            to right bottom,
            rgba(${co1}),
            rgba(${co2})),url(${backGroundUrl} )`
  };

  return (
    <header style={styles} className={`header1__header header1__header${cla}`}>
      <div className="header1__logo-box">
        <img className="header1__logo" src={logUrl} alt="logo" />
      </div>

      <div className="header1__text-box">
        <h1 className="header1__heading-primary">
          <span className="header1__primary-main"> {headingMain} </span>
          <span className="header1__primary-sub"> {headingSub} </span>
        </h1>
      </div>
    </header>
  );
};

export default Header1;
