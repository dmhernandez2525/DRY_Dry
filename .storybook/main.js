module.exports = {
  // stories: ["../src/components/**/*.stories.js"],
  stories: ["../src/stories/**/*.stories.(js|mdx)"],
  // stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    "@storybook/preset-create-react-app",
    "storybook-readme/register",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "./.storybook/design-addon/register.js"
  ]
};
