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
  Accordion,
  BottomSheet,
  SideSheet,
  AccordionSingle,
  DropdownMenu,
  Tab,
  BottomBar,
  NavigationDrawer,
  TopBar,
  BottomNavigation,
  NavigationRail
} from "../stories";

// export default {
//   title: "Menus"
//   // component: Menus
// };

const DryAccordion = Accordion.Default;
const DryBottomSheet = BottomSheet.Default;
const DrySideSheet = SideSheet.Default;
const DryAccordionSingle = AccordionSingle.Default;
const DryDropdownMenu = DropdownMenu.Default;
const DryTab = Tab.Default;
const DryBottomBar = BottomBar.Default;
const DryNavigationDrawer = NavigationDrawer.Default;
const DryTopBar = TopBar.Default;
const DryBottomNavigation = BottomNavigation.Default;
const DryNavigationRail = NavigationRail.Default;

export {
  DryAccordion,
  DryBottomSheet,
  DrySideSheet,
  DryAccordionSingle,
  DryDropdownMenu,
  DryTab,
  DryBottomBar,
  DryNavigationDrawer,
  DryTopBar,
  DryBottomNavigation,
  DryNavigationRail
};

storiesOf("Components/Menus/Accordion", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryAccordion />);

storiesOf("Components/Menus/BottomSheet", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryBottomSheet />);

storiesOf("Components/Menus/SideSheet", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DrySideSheet />);

storiesOf("Components/Menus/AccordionSingle", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryAccordionSingle />);

storiesOf("Components/Menus/DropdownMenu", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryDropdownMenu />);

storiesOf("Components/Menus/Tab", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryTab />);

storiesOf("Components/Menus/BottomBar", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryBottomBar />);

storiesOf("Components/Menus/NavigationDrawer", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryNavigationDrawer />);

storiesOf("Components/Menus/TopBar", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryTopBar />);

storiesOf("Components/Menus/BottomNavigation", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryBottomNavigation />);

storiesOf("Components/Menus/NavigationRail", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Default", () => <DryNavigationRail />);
