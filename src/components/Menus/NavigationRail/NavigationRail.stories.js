
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
        
        import NavigationRail from "./NavigationRail";
        import NavigationRailPropTable from "./NavigationRailPropTable.md";
        import README from "./README.md";
        
        export const actionsData = {
            onClick: action("onClick"),
            onChange: action("onChange"),
            onBlur: action("onBlur")
        };
        
        export const Default = () => {
            return <NavigationRail             
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
        
        

        storiesOf("Components/Menus/NavigationRail", module)
        .addParameters({
          zeplinLink:
            "",
          readme: {
            codeTheme: "atom-dark",
            sidebar: [README, NavigationRailPropTable],
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
      
        