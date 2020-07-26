import React from "react";
import { storiesOf } from "@storybook/react";
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

import Menu from "./Menu";

export const actionsData = {
  onClick: action("onClick"),
  onChange: action("onChange"),
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <Menu
      id={text("id", "")}
      name={text("name", "")}
      userTip={text("userTip", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      errorMes={text("errorMes", "")}
      styles={object("styles", {})}
      passProps={object("passProps", {})}
      check={object("check", Menu.exampleData)}
      data={object("data", {
        category1: {
          pizza1: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake1: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa1: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          }
        },
        category2: {
          pizza: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa4: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          }
        },
        category3: {
          pizza: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          }
        },
        category4: {
          pizza: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa1: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pancake2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          salsa2: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          },
          pizza3: {
            image:
              "https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg",
            price: 10,
            description: "This is the tatsy items description"
          }
        }
      })}
      {...actionsData}
    />
  );
};

storiesOf("Docs/Sticker Sheet", module).add("Change", () => <Default />);

storiesOf("Features/Menu", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
