import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./TekMateFooter.utils.js";

import "./TekMateFooter.scss";

const TekMateFooter = ({
  orgName,
  missionStatement,
  address,
  phoneNumber,
  email,
  pageLinks,
  social,
  className
}) => {
  const displayPageLinks = pageLinks.map(name => {
    let formatWord = href => {
      if (href) {
        let words = name.split("-");

        let parseLowercase = words.map(word => {
          let firstLetter = word[0];
          let newWord = word.split("");
          newWord.shift();
          newWord.unshift(firstLetter.toLowerCase());
          return newWord.join("");
        });
        return parseLowercase.join("-");
      } else {
        let words = name.split("-");

        let parseUppercase = words.map(word => {
          let firstLetter = word[0];
          let newWord = word.split("");
          newWord.shift();
          newWord.unshift(firstLetter.toUpperCase());
          return newWord.join("");
        });
        return parseUppercase.join(" ");
      }
    };

    return (
      <li>
        <a href={formatWord(true)}>{formatWord(false)}</a>
      </li>
    );
  });

  const displaySocial = Object.keys(social).map(name => {
    return (
      <a href={social[name]} className={name}>
        <i className={`fa fa-${name}`}></i>
      </a>
    );
  });
  return (
    <div
      className={classnames({
        [className]: true,
        "dry-tekMateFooter": true
      })}
    >
      <div className="tek-mate-footer">
        <div className="tek-mate-footer__mission">
          <h3>{orgName}</h3>
          <p>{missionStatement}</p>
        </div>

        <div className="tek-mate-footer__links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            {displayPageLinks}
          </ul>
        </div>

        <div className="tek-mate-footer__content">
          <h4>Contact Us</h4>
          <p>
            {address[0]} <br />
            {address[1]}
            <br />
            United States <br />
            <strong>Phone:</strong> +1 {phoneNumber}
            <br />
            <strong>Email:</strong> {email}
            <br />
          </p>

          <div className="tek-mate-footer__social-links">{displaySocial}</div>
        </div>

        <div className="tek-mate-footer__content">
          <h4>Our Newsletter</h4>
          <p>Find out about upcoming events</p>
          <form action="" method="post">
            <input type="email" name="email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
};

TekMateFooter.defaultProps = {
  orgName: "Tek Mate",
  missionStatement:
    "Our mission is to provide the unbounded power and connectivity of the internet for communities, creators, visionaries, charitable organizations, and underrepresented enterprises by closing the gap between cost and access for cutting edge technologies and innovation, granting consumers full access to all businesses and organizations without compromising on convenience, price or quality, and leveling the playing field for all businesses to utilize technology to provide the best experience and service for their customers.",
  address: ["64432 Adam Street", "Denver, CO 80014"],
  phoneNumber: "217 508 9193",
  email: "information@tekmate.ai",
  pageLinks: ["About-Us", "Services", "Terms-Of-Service", "Privacy-Policy"],
  social: {
    twitter: "https://twitter.com/tekmate2019",
    facebook: "https://www.facebook.com/tekmate2019/",
    instagram: "https://www.instagram.com/tekmate2019/",
    linkedin: "https://www.linkedin.com/company/68047419"
  }
};

export default TekMateFooter;
