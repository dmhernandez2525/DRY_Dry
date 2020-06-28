import React from "react";
import { storiesOf } from "@storybook/react";

// storiesOf("Components/Buttons/ToggleButton", module)
//   .addParameters({
//     readme: {
//       codeTheme: "atom-dark",
//     }
//   })
//   .add("Default", () => <Default />)

import {
  QuiltedImageList,
  StandardImageList,
  WovenImageList
} from "../stories";

// export default {
//   title: "ImageLists"
//   // component: ImageLists
// };

const QuiltedImage = QuiltedImageList.Default;
const StandardImage = StandardImageList.Default;
const WovenImage = WovenImageList.Default;

storiesOf("Components/ImageLists/QuiltedImage", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <QuiltedImage />);
storiesOf("Components/ImageLists/StandardImage", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <StandardImage />);
storiesOf("Components/ImageLists/WovenImage", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <WovenImage />);
