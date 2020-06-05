import React from "react";
import faker from "faker";
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
              title: faker.commerce.productName(),
              text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo orci et ipsum faucibus vestibulum. Morbi dui diam, finibus a sem id, placerat aliquam lectus. Nunc feugiat aliquet turpis, sit amet tristique est tristique ac. Suspendisse purus justo, pulvinar non lectus vel, consectetur scelerisque augue. Sed porttitor vehicula diam. Aenean non pretium nulla. Proin mollis, justo sed blandit feugiat, elit magna ultrices libero, sed mattis nunc neque vel ipsum. Etiam molestie justo quis ipsum tincidunt, nec luctus ligula facilisis. Morbi mattis efficitur ipsum, vitae sodales sapien suscipit et. Mauris finibus nisi ac sem sollicitudin lacinia. Morbi a nunc vitae purus tempus iaculis sed ut lacus. 

                Aliquam convallis pellentesque leo ac imperdiet. Ut mattis libero ut orci ultricies, eget fermentum dui congue. In tincidunt congue sapien auctor ultricies. Donec hendrerit aliquam mi et hendrerit. Donec porta nibh non tempus sollicitudin. Nam ut ligula nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit semper, molestie purus fringilla, mollis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed eget pharetra massa, ac iaculis lorem. Ut condimentum metus magna, ac finibus tortor congue quis. Pellentesque feugiat molestie dolor, ut ultricies justo finibus sed. Nulla facilisi. Phasellus a elementum velit.`,
              pic: faker.random.image(),
              description: "",
              selectedFile: null
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
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide2: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide3: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide4: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide5: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide6: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide7: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              },
              slide8: {
                picUrl: faker.random.image(),
                title: "Hey",
                detail:
                  "Curabitur eu eros et risus rutrum elementum.Phasellus a quam lobortis magna viverra tempus.Sed dictum nibh porttitor aliquet pulvinar.Pellentesque vestibulum erat eu ex laoreet volutpat."
              }
            }
          ]
        },
        feature6: {
          Team: [
            {
              member1: {
                pic: faker.image.avatar(),
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
                pic: faker.image.avatar(),
                name: "Bill",
                about:
                  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
                socialLinks: {
                  facebook: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  },
                  instagram: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  },
                  linkedin: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  }
                }
              },
              member3: {
                pic: faker.image.avatar(),
                name: "Margret",
                about:
                  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.",
                socialLinks: {
                  facebook: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  },
                  instagram: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  },
                  linkedin: {
                    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  }
                }
              }
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
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName()
                ]
              },
              row2: {
                name: "Plus",
                price: 9,
                details: [
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName()
                ]
              },
              row3: {
                name: "Pro",
                price: 20,
                details: [
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName(),
                  faker.commerce.productName()
                ]
              }
            }
          ]
        },
        feature7: {
          Menu: [
            {
              Entrees: {
                pizza1: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake1: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa1: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                }
              },
              Appetizers: {
                pizza: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa4: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                }
              },
              Desserts: {
                pizza: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                }
              },
              Drinks: {
                drink1: {
                  image:
                    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/drink-1.png",
                  price: 10,
                  description: "This is the tatsy items description"
                },
                drink2: {
                  image:
                    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/drink-2.png",
                  price: 10,
                  description: "This is the tatsy items description"
                },
                drink3: {
                  image:
                    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/drink-3.png",
                  price: 10,
                  description: "This is the tatsy items description"
                },
                drink4: {
                  image:
                    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/drink-4.png",
                  price: 10,
                  description: "This is the tatsy items description"
                },
                drink5: {
                  image:
                    "https://comfort-order-dev.s3.us-east-2.amazonaws.com/drink-5.png",
                  price: 10,
                  description: "This is the tatsy items description"
                }
              },
              Specials: {
                pizza: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa1: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pancake2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                salsa2: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                },
                pizza3: {
                  image: faker.random.image(),
                  price: 10,
                  description: "This is the tatsy items description"
                }
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
        }
      }}
      template="NonProfit"
      businessData={{
        template: "NonProfit",
        name: "Demo Non Profit Name",
        url: "Demo Non Profit url",
        phoneNumber: "Demo Site phoneNumber",
        address: "766 6th st charleston,il 61920",
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
