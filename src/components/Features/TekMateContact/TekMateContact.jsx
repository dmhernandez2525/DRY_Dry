import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import * as Utils from "./TekMateContact.utils.js";

import "./TekMateContact.scss";

const TekMateContact = ({ address, phoneNumber, email, className }) => {
  return (
    <div
      className={classnames({
        [className]: true,
        "tek-mate-contact": true
      })}
    >
      <div className="">
        <div className="">
          <h3>Contact Us</h3>
        </div>

        <div className="tek-mate-contact__content-wrapper">
          <div className="tek-mate-contact__content-map">
            <div className="">
              <iframe
                src="https://maps.google.com/maps?q=denver%2CCO&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                frameborder="0"
                style={{ border: 0, width: "100%", height: "312px" }}
                allowfullscreen=""
              ></iframe>
            </div>
          </div>

          <div className="tek-mate-contact__content-form">
            <div className="tek-mate-contact__contact-info-wrapper">
              <div className="">
                <i className=""></i>
                <p>Denver, CO 80014</p>
              </div>
              <div className="">
                <i className=""></i>
                <p>information@tekmate.ai</p>
              </div>
              <div className="">
                <i className=""></i>
                <p>217 508 9193</p>
              </div>
            </div>

            <div className="">
              <div>Your message has been sent. Thank you!</div>
              <div id="errormessage"></div>
              <form action="" method="post" role="form" className="">
                <div className="tek-mate-contact__two-inputs">
                  <input
                    type="text"
                    name="name"
                    className=""
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className=""></div>
                </div>
                <div className="">
                  <textarea
                    className=""
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    spellcheck="false"
                  ></textarea>
                  <div className=""></div>
                </div>
                <div className="">
                  <button type="submit" title="Send Message">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TekMateContact.defaultProps = {
  address: "Denver, CO 80014",
  phoneNumber: "217 508 9193",
  email: "information@tekmate.ai",
  className: ""
};

export default TekMateContact;
