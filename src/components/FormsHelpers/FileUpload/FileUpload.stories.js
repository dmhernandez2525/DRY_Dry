import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs/react";

import FileUpload from "./FileUpload";

export default {
  component: FileUpload,
  title: "FileUpload",
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

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
