import fs from "fs";
import format from "./format.js";
import component from "./component.mjs";
import componentTest from "./componentTest.mjs";
import componentStory from "./componentStory.mjs";
import styles from "./styles.mjs";
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
  Object.keys(files).forEach(parent => {
    files[parent].forEach(child => {
      const input = capitalizeWord(child);
      const lowerCaseInput = lowerCaseWord(child);

      const displayIndex = `
import  ${input} from "./${input}";
export default ${input};
`;
      const displayComponent = component(input, lowerCaseInput);
      const displayComponentTest = componentTest(input, lowerCaseInput);
      const displayComponentStory = componentStory(input, lowerCaseInput);
      const displayStyles = styles(lowerCaseInput);

      makeComponent(
        parent,
        input,
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
