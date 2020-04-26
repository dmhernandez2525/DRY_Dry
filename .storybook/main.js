module.exports = {
  // stories: ["../src/components/**/*.stories.js"],
  stories: ["../src/stories/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "./.storybook/design-addon/register.js"
  ]
};
