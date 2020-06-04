import React from "react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  knob,
  text,
  boolean,
  number,
  color,
  object,
  array,
  date,
  select,
  files,
  button
} from "@storybook/addon-knobs/react";

import Index from "./index";

export default {
  component: Index,
  title: "NonProfit",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Index
      features={{
        feature1: {
          About: [
            {
              title: "sertgserg",
              text:
                "https://comfort-order-dev.s3.us-east-2.amazonaws.com/20200525_172756.jpg",
              pic:
                "https://comfort-order-dev.s3.us-east-2.amazonaws.com/20200525_172756.jpg",
              description: "",
              selectedFile: null
            }
          ]
        },
        feature2: {
          Pricing: [
            {
              row1: {
                name: "Free",
                price: 0,
                details: [
                  "Curabitur eu eros et risus rutrum elementum.",
                  "Phasellus a quam lobortis magna viverra tempus.",
                  "Sed dictum nibh porttitor aliquet pulvinar.",
                  "Pellentesque vestibulum erat eu ex laoreet volutpat."
                ]
              },
              row2: {
                name: "Plus",
                price: 9,
                details: [
                  "Curabitur eu eros et risus rutrum elementum.",
                  "Phasellus a quam lobortis magna viverra tempus.",
                  "Sed dictum nibh porttitor aliquet pulvinar.",
                  "Pellentesque vestibulum erat eu ex laoreet volutpat.",
                  "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
                  "Nullam quis eros ac eros cursus tempor a quis lorem."
                ]
              },
              row3: {
                name: "Pro",
                price: 20,
                details: [
                  "Curabitur eu eros et risus rutrum elementum.",
                  "Phasellus a quam lobortis magna viverra tempus.",
                  "Sed dictum nibh porttitor aliquet pulvinar.",
                  "Pellentesque vestibulum erat eu ex laoreet volutpat.",
                  "Nam tempor ex auctor nunc gravida, vel facilisis eros sagittis.",
                  "Nullam quis eros ac eros cursus tempor a quis lorem.",
                  "Proin vel nisi sed mauris tristique tincidunt vulputate sit amet nulla.",
                  "Phasellus vulputate nisi in libero euismod, lacinia mattis ligula cursus.",
                  "Donec porta enim vitae mollis bibendum.",
                  "Fusce in erat id diam porttitor pellentesque et non tortor."
                ]
              }
            }
          ]
        },
        feature3: {
          SpotlightGallery: [
            {
              img1: {
                picUrl:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                comment:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              img2: {
                picUrl:
                  "https://ca.slack-edge.com/T03GU501J-UJYKQ3PT8-83706a22bf58-512",
                comment:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              img3: {
                picUrl:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                comment:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              }
            }
          ]
        },
        feature4: {
          ImageCarousel: [
            {
              slide1: {
                picUrl:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg",
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide2: {
                picUrl:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide3: {
                picUrl:
                  "https://image.shutterstock.com/z/stock-photo-a-deer-in-the-colors-of-a-foggy-morning-1508990603.jpg",
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              }
            }
          ]
        },
        feature5: {
          Hours: [
            {
              Monday: { from: "10am", to: "10pm" },
              Tuesday: { from: "10am", to: "10pm" },
              Wednesday: { from: "10am", to: "10pm" },
              Thursday: { from: "10am", to: "10pm" },
              Friday: { from: "10am", to: "10pm" },
              Saturday: { from: "10am", to: "10pm" },
              Sunday: { from: "10am", to: "10pm" }
            }
          ]
        },
        feature6: {
          Team: [
            {
              member1: {
                pic:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                name: "Tom",
                about:
                  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
                socialLinks: {
                  facebook: {
                    url: "https://www.facebook.com"
                  },
                  instagram: {
                    url: "https://www.instagram.com"
                  },
                  linkedin: {
                    url: "https://www.linkedin.com"
                  }
                }
              },
              member2: {
                pic:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                name: "Bill",
                about:
                  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
                socialLinks: {
                  facebook: {
                    url: "https://www.facebook.com"
                  },
                  instagram: {
                    url: "https://www.instagram.com"
                  },
                  linkedin: {
                    url: "https://www.linkedin.com"
                  }
                }
              },
              member3: {
                pic:
                  "https://comfort-order-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-06-03+at+8.32.50+PM.png",
                name: "Margret",
                about:
                  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
                socialLinks: {
                  facebook: {
                    url: "https://www.facebook.com"
                  },
                  instagram: {
                    url: "https://www.instagram.com"
                  },
                  linkedin: {
                    url: "https://www.linkedin.com"
                  }
                }
              }
            }
          ]
        }
      }}
      template="NonProfit"
      businessData={{
        template: "NonProfit",
        name: "Demo Non Profit Name",
        url: "Demo Non Profit url",
        phoneNumber: "Demo Site phoneNumber",
        address: "Demo Site address",
        slogan: "Demo Site slogan",
        __typename: "BusinessType"
      }}
    />
  );
};
// ,feature: {
//   Name: [
//     {

//     }
//   ]
// },
