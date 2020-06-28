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
  About,
  ImageCarousel,
  Team,
  Header1,
  Pricing,
  Hours,
  SpotlightGallery,
  Menu
} from "../stories";

// export default {
//   title: "Features"
//   // component: Features
// };

const DryAbout = About.Default;
const DryImageCarousel = ImageCarousel.Default;
const DryTeam = Team.Default;
const DryHeader1 = Header1.Default;
const DryPricing = Pricing.Default;
const DryHours = Hours.Default;
const DrySpotlightGallery = SpotlightGallery.Default;
const DryMenu = Menu.Default;

// export {
//   DryAbout,
//   DryImageCarousel,
//   DryTeam,
//   DryHeader1,
//   DryPricing,
//   DryHours,
//   DrySpotlightGallery,
//   DryMenu
// };

// storiesOf("Features/All", module)
//   .addParameters({
//     readme: {
//       codeTheme: "atom-dark"
//     }
//   })
//   .add("About", () => <DryAbout />)
//   .add("ImageCarousel", () => <DryImageCarousel />)
//   .add("Team", () => <DryTeam />)
//   .add("Header1", () => <DryHeader1 />)
//   .add("Pricing", () => <DryPricing />)
//   .add("Hours", () => <DryHours />)
//   .add("SpotlightGallery", () => <DrySpotlightGallery />)
//   .add("Menu", () => <DryMenu />);

storiesOf("Features/About", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryAbout />);

storiesOf("Features/ImageCarousel", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryImageCarousel />);

storiesOf("Features/Team", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryTeam />);

storiesOf("Features/Header1", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryHeader1 />);

storiesOf("Features/Pricing", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryPricing />);

storiesOf("Features/Hours", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryHours />);

storiesOf("Features/SpotlightGallery", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DrySpotlightGallery />);

storiesOf("Features/Menu", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryMenu />);
