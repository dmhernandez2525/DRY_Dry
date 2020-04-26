import React from "react";

import "./Team.scss";

const Team = ({
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
  members
}) => {
  // EXAMPLE INPUT
  //   members:{
  //     member1: {
  //         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         name: "Tom",
  //         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
  //         socialLinks: {
  //              facebook:{
  //                  url:"https://www.facebook.com",
  //              },
  //              instagram:{
  //                  url:"https://www.instagram.com",
  //              },
  //              linkedin:{
  //                  url:"https://www.linkedin.com",
  //              }
  //          },
  //
  //     },
  //     member2: {
  //         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         name: "Bill",
  //         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
  //         socialLinks: {
  //              facebook:{
  //                  url:"https://www.facebook.com",
  //              },
  //              instagram:{
  //                  url:"https://www.instagram.com",
  //              },
  //              linkedin:{
  //                  url:"https://www.linkedin.com",
  //              }
  //          },
  //     },
  //     member3: {
  //         pic:"https://ca.slack-edge.com/TL86V04VD-UL6LL1UJC-e8394a6f6209-48",
  //         name: "Margret",
  //         about: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
  //         socialLinks: {
  //              facebook:{
  //                  url:"https://www.facebook.com",
  //              },
  //              instagram:{
  //                  url:"https://www.instagram.com",
  //              },
  //              linkedin:{
  //                  url:"https://www.linkedin.com",
  //              }
  //          }
  //
  //     }
  // }

  const socialOpen = url => {
    window.open(url);
  };

  let links = {
    facebook:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/facebook-icon_32x32.png",
    linkedin:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/linkedin-icon_32x32.png",
    twitter:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/twitter-icon_32x32.png",
    youtube:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/youtube-icon_32x32.png",
    instagram:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/instagram-icon_32x32.png",
    skype:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/skype-icon_32x32.png",
    pinterest:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/pinterest-icon_32x32.png",
    reddit:
      "https://68ef2f69c7787d4078ac-7864ae55ba174c40683f10ab811d9167.ssl.cf1.rackcdn.com/reddit-icon_32x32.png",
    pr: ""
  };

  let display = (
    <div>
      <span>Valid props where not pased</span>
    </div>
  );

  if (members) {
    display = Object.values(members).map(member => {
      let socialLinks = Object.keys(member.socialLinks).map((social, i) => {
        let socialData = member.socialLinks[social];
        return (
          <li key={`${member.name}:${i}`}>
            <button
              className={"social-links"}
              onClick={e => socialOpen(socialData.url)}
              style={{ backgroundImage: `url(${links[social]})` }}
            ></button>
          </li>
        );
      });
      return (
        <div key={member.name}>
          <img src={member.pic} />
          <div>
            <h1>{member.name}</h1>
            <p>{member.about}</p>
          </div>
          <ul>{socialLinks}</ul>
        </div>
      );
    });
  }

  return (
    <div onClick={() => onClick("DryTeam")} className="dry-team">
      {display}
    </div>
  );
};

Team.defaultProps = {
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

export default Team;
