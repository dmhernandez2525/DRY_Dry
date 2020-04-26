const storyComponent = input => {
  const displayStoryComponent = `
        import React from "react";
        import { action } from "@storybook/addon-actions";
        import { withKnobs, object } from "@storybook/addon-knobs/react";
        
        import ${input} from "./${input}";

        export default {
            component: ${input},
            title: "${input}",
            decorators: [withKnobs],
            // Our exports that end in "Data" are not stories.
            excludeStories: /.*Data$/
          };
          


        export const ${input}Data = {
            id: "",
            name: "",
            userTip: "",
            disable: false,
            className: "",
            errorMes: "",
            styles: null,
            passProps: null
        };
        
        export const actionsData = {
            onClick: action("onClick"),
            onChange: action("onChange"),
            onBlur: action("onBlur")
        };
        
        // export const Default = () => <${input} ${input}Data={{ ...${input}Data }} {...actionsData} />;
        export const Default = () => {
            return <${input} ${input}Data={ object("${input} ", { ...${input}Data })  } {...actionsData} />;
        };
        
        export const Disable = () => (
            <${input} ${input}Data={ object("${input} ",  { ...${input}Data, disable: true })  }   {...actionsData} />
        );
        
        export const Error = () => (
            <${input} ${input}Data={  object("${input} ", { ...${input}Data, errorMes: "DemoError" } )} {...actionsData} />
        );
        
        const userTip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo arcu sit amet malesuada tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus finibus eget ex id consectetur. Curabitur scelerisque, purus sit amet auctor rhoncus, lorem sem blandit ipsum, vitae convallis quam magna nec leo. Cras aliquet metus quis tortor pharetra hendrerit. Sed placerat interdum hendrerit. Mauris convallis lacus enim, a dignissim dolor congue at. Mauris eget consequat nisl. Donec lobortis ligula eu velit pharetra, sit amet bibendum sapien molestie. Donec vestibulum blandit massa eget commodo. Aliquam aliquet tristique tortor, ac facilisis sem rhoncus id. Sed bibendum diam nisl, in aliquam risus venenatis quis. Praesent ipsum metus, dictum nec aliquam id, venenatis et ante. Quisque sit amet suscipit elit. Pellentesque eget turpis a ex ullamcorper hendrerit id eget dolor.';
        
        export const UserTip = () => (
            <${input} ${input}Data={ object("${input} ", { ...${input}Data, userTip: userTip})} {...actionsData} />
        );
        `;

  return displayStoryComponent;
};

export default storyComponent;
