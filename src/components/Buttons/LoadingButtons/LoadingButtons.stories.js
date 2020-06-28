
        import React from "react";
        import { storiesOf } from "@storybook/react";
        import { action } from "@storybook/addon-actions";
        import { 
            withKnobs, 
            knob,
            text,
            boolean,
            number,
            color,
            object,
            array,
            date,
            select,
            files,
            button } from "@storybook/addon-knobs/react";
        
        import LoadingButtons from "./LoadingButtons";
        import LoadingButtonsPropTable from "./LoadingButtonsPropTable.md";
        import README from "./README.md";
        
        export const actionsData = {
            onClick: action("onClick"),
            onChange: action("onChange"),
            onBlur: action("onBlur")
        };
        
        export const Default = () => {
            return <LoadingButtons             
                id={text("id","")}
                name={text("name","")}
                userTip={text("userTip","")}
                disable={boolean("disable",false)}
                className={text("className","")}
                errorMes={text("errorMes","")}
                styles={object("styles", {})}
                passProps={object("passProps", {})} 
                {...actionsData} 
            />;
        };
        
        export const Disable = () => (
            <LoadingButtons 
                id={text("id", "")}
                name={text("name", "")}
                userTip={text("userTip", "")}
                disable={boolean("disable", true)}
                className={text("className", "")}
                errorMes={text("errorMes", "")}
                styles={object("styles",  {})}
                passProps={object("passProps",  {})}
                {...actionsData}
            />
        );
        
        export const Error = () => (
            <LoadingButtons 
                id={text("id", "")}
                name={text("name", "")}
                userTip={text("userTip", "")}
                disable={boolean("disable", false)}
                className={text("className", "")}
                errorMes={text("errorMes", "DemoError")}
                styles={object("styles",  {})}
                passProps={object("passProps",  {})} 
              {...actionsData}
            />
        );
        
        const userTip = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo arcu sit amet malesuada tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus finibus eget ex id consectetur. Curabitur scelerisque, purus sit amet auctor rhoncus, lorem sem blandit ipsum, vitae convallis quam magna nec leo. Cras aliquet metus quis tortor pharetra hendrerit. Sed placerat interdum hendrerit. Mauris convallis lacus enim, a dignissim dolor congue at. Mauris eget consequat nisl. Donec lobortis ligula eu velit pharetra, sit amet bibendum sapien molestie. Donec vestibulum blandit massa eget commodo. Aliquam aliquet tristique tortor, ac facilisis sem rhoncus id. Sed bibendum diam nisl, in aliquam risus venenatis quis. Praesent ipsum metus, dictum nec aliquam id, venenatis et ante. Quisque sit amet suscipit elit. Pellentesque eget turpis a ex ullamcorper hendrerit id eget dolor.';
        
        export const UserTip = () => (
            <LoadingButtons   
                id={text("id", "")}
                name={text("name", "")}
                userTip={text("userTip", userTip)}
                disable={boolean("disable", false)}
                className={text("className", "")}
                errorMes={text("errorMes", "")}
                styles={object("styles",  {})}
                passProps={object("passProps",  {})} 
            {...actionsData} />
        );

        storiesOf("Components/Buttons/LoadingButtons", module)
        .addParameters({
          zeplinLink:
            "",
          readme: {
            codeTheme: "atom-dark",
            sidebar: [README, LoadingButtonsPropTable],
            StoryPreview: ({ children }) => {
              return (
                <div>
                  {children}
                </div>
              );
            }
          }
        })
        .add("Default", () => <Default />)
        .add("Error", () => <Error />)
        .add("UserTip", () => <UserTip />)
        .add("Disable", () => <Disable />);
      
        