import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";

import FileUpload from "./FileUpload";

export const actionsData = {
  onBlur: action("onBlur")
};

export const Default = () => {
  return (
    <FileUpload
      uploadUrl={text("uploadUrl", "http://localhost:5000/upload")}
      uploadFileName={text("uploadFileName", "myImage")}
      hasSubmitInput={boolean("hasSubmitInput", true)}
      label={text("label", "Please select a file to upload")}
      uploadButtonLabel={text("uploadButtonLabel", "Upload")}
      id={text("id", "")}
      disable={boolean("disable", false)}
      className={text("className", "")}
      {...actionsData}
    />
  );
};

storiesOf("Components/FormHelpers/FileUpload", module)
  .addParameters({
    zeplinLink: "",
    readme: {
      codeTheme: "atom-dark",
      StoryPreview: ({ children }) => {
        return <div>{children}</div>;
      }
    }
  })
  .add("Default", () => <Default />);
