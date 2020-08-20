import fs from "fs";
import format from "./format.js";
import component from "./component.mjs";
import componentPropTable from "./componentPropTable.mjs";
import componentReadme from "./componentReadme.mjs";
import componentTest from "./componentTest.mjs";
import componentStory from "./componentStory.mjs";
import styles from "./styles.mjs";
import Types from "./types.mjs";
// run node cliBuild.mjs  testing2

const handleError = err => {
  if (err) throw err;
};

const capitalizeWord = word => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const lowerCaseWord = word => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toLowerCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const makeComponent = async (
  parent,
  name,
  propTable,
  readme,
  component,
  test,
  story,
  styles,
  index
) => {
  const path = `./components/${parent}/${name}`;

  await new Promise((resolve, reject) => {
    try {
      fs.mkdirSync(path, { recursive: true });
    } catch (error) {
      resolve(error);
    }
    console.log("Component Directiory Created");
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.jsx`, `${component}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.jsx Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}PropTable.md`, `${propTable}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.md Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/README.md`, `${readme}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`README.md Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.test.js`, `${test}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.test.js Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.stories.js`, `${story}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.stories.js Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/${name}.scss`, `${styles}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log(`${name}.scss Created`);
    resolve("Saved");
  });

  await new Promise((resolve, reject) => {
    try {
      fs.appendFile(`${path}/index.js`, `${index}`, handleError);
    } catch (error) {
      resolve(error);
    }
    console.log("index.js Created");
    resolve("Saved");
  });

  let mess = await format(path);
  console.log(mess);
};

const files = {
  Base: ["Card"],

  ImageLists: ["QuiltedImageList", "StandardImageList", "WovenImageList"],
  ProgressIndicators: ["CircularIndicator", "LinearIndicator"],
  Buttons: [
    "ActionButton",
    "DryButton",
    "ToggleButton",
    "Button",
    "OutlinedButton",
    "ContainedButton",
    "TextButton"
  ],

  Lists: ["Divider", "SingleLineList", "ThreeLineList", "TwoLineList"],
  UserHelpers: ["Banner", "Snackbar", "Tooltip"],
  Features: [
    "About",
    "ImageCarousel",
    "Team",
    "Header1",
    "Pricing",
    "Hours",
    "SpotlightGallery"
  ],
  Menus: [
    "Accordion",
    "BottomSheet",
    "SideSheet",
    "AccordionSingle",
    "DropdownMenu",
    "Tab",
    "BottomBar",
    "NavigationDrawer",
    "TopBar",
    "BottomNavigation",
    "NavigationRail"
  ],

  Forms: [
    "Checkbox",
    "Label",
    "SelectionControl",
    "Chip",
    "Password",
    "Slider",
    "DatePicker",
    "Radio",
    "Switch",
    "Input",
    "Select"
  ],

  Modals: ["AlertDialog", "ModalBox", "ConfirmationDialog", "SimpleDialog"]
};

const makeAll = () => {
  Object.keys(Types).forEach(parent => {
    Types[parent].forEach(child => {
      // this will be the main directory for storybook files
      const mainTypes = ["Templates", "Features"];
      const dir = mainTypes.includes(parent) ? parent : "Components";
      let type;
      if (dir === "Components") {
        type = `Components/${parent}`;
      } else {
        type = parent;
      }
      const input = capitalizeWord(child);
      const lowerCaseInput = lowerCaseWord(child);

      const displayIndex = `
import  ${input} from "./${input}";
export default ${input};
`;

      const componentProps = {
        properties: {
          id: "",
          name: "",
          userTip: "",
          disable: false,
          className: "",
          errorMes: "",
          styles: null,
          passProps: null
        },
        events: { onClick: null, onChange: null, onBlur: null }
      };

      const displayComponent = component(input, lowerCaseInput);
      const displayComponentPropTable = componentPropTable(
        input,
        componentProps
      );
      const displayComponentReadme = componentReadme(input, componentProps);
      const displayComponentTest = componentTest(input, lowerCaseInput);
      const displayComponentStory = componentStory(input, lowerCaseInput, type);
      const displayStyles = styles(lowerCaseInput);

      makeComponent(
        parent,
        input,
        displayComponentPropTable,
        displayComponentReadme,
        displayComponent,
        displayComponentTest,
        displayComponentStory,
        displayStyles,
        displayIndex
      );
    });
  });
};

makeAll();
