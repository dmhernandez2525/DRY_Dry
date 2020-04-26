import fs from "fs";
import component from "./component.mjs";
import componentTest from "./componentTest.js.mjs";
import componentStory from "./componentStory.js.mjs";
import styles from "./styles.mjs";
// run node cliBuild.mjs  testing2

const handleError = err => {
  if (err) throw err;
  console.log("Saved!");
};

const capitalizeWord = word => {
  const newWord = word.split("");
  const firstLetter = newWord[0].toUpperCase();
  newWord.splice(0, 1, firstLetter);
  return newWord.join("");
};

const makeDirectory = (name, component, test, story, styles, index) => {
  const path = `./${name}`;
  fs.mkdirSync(path, { recursive: true });
  fs.appendFile(`${path}/${name}.jsx`, `${component}`, handleError);
  fs.appendFile(`${path}/${name}.test.js`, `${test}`, handleError);
  fs.appendFile(`${path}/${name}.stories.js`, `${story}`, handleError);
  fs.appendFile(`${path}/${name}.scss`, `${styles}`, handleError);
  fs.appendFile(`${path}/index.js`, `${index}`, handleError);
};

const cli = process.argv[2];
const input = capitalizeWord(cli);

const displayIndex = `
import  ${input} from "./${input}";
export default ${input};
`;
const displayComponent = component(input);
const displayComponentTest = componentTest(input);
const displayComponentStory = componentStory(input);
const displayStyles = styles();

makeDirectory(
  input,
  displayComponent,
  displayComponentTest,
  displayComponentStory,
  displayStyles,
  displayIndex
);
