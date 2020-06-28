module.exports = {
  stories: ["../src/components/**/*.stories.(js|mdx)"],
  // stories: ["../src/components2/**/*.stories.(js|mdx)"],
  // stories: ["../src/stories/**/*.stories.(js|mdx)"],
  // stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    // https://github.com/storybookjs/storybook/tree/master/addons/a11y
    "@storybook/addon-a11y/register",
    // https://github.com/storybookjs/storybook/tree/master/addons/backgrounds
    "@storybook/addon-backgrounds/register",
    "@storybook/preset-create-react-app",
    // https://github.com/tuchk4/storybook-readme
    "storybook-readme/register",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    // https://github.com/storybookjs/storybook/tree/master/addons/docs
    "@storybook/addon-docs",
    "storybook-zeplin/register",
    // {
    //   // https://github.com/storybookjs/storybook/tree/master/addons/storysource
    //   name: "@storybook/addon-storysource",
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       // include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: {
    //         printWidth: 100,
    //         tabWidth: 2,
    //         bracketSpacing: true,
    //         trailingComma: "es5",
    //         singleQuote: true
    //       }
    //     }
    //   }
    // },
    "@storybook/addon-viewport/register"
    // "./.storybook/design-addon/register.js"
  ]
};
