
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
        
        import ProgressBars from "./ProgressBars";
        import ProgressBarsPropTable from "./ProgressBarsPropTable.md";
        import README from "./README.md";
        
        export const actionsData = {
            onClick: action("onClick"),
            onChange: action("onChange"),
            onBlur: action("onBlur")
        };
        
        export const Default = () => {
            return <ProgressBars             
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
        
        

        storiesOf("Components/ProgressIndicators/ProgressBars", module)
        .addParameters({
          zeplinLink:
            "",
          readme: {
            codeTheme: "atom-dark",
            sidebar: [README, ProgressBarsPropTable],
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
      
        