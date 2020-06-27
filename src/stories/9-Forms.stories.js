import React from "react";
import { storiesOf } from "@storybook/react";

// storiesOf("Components/Buttons/ToggleButton", module)
//   .addParameters({
//     readme: {
//       codeTheme: "duotone-sea",
//     }
//   })
//   .add("Default", () => <Default />)
//   .add("Error", () => <Error />)
//   .add("UserTip", () => <UserTip />)
//   .add("Disable", () => <Disable />);

import {
  Checkbox,
  Label,
  SelectionControl,
  Chip,
  Password,
  Slider,
  DatePicker,
  Radio,
  Switch,
  Input,
  Select,
  FileUpload
} from "../stories";

export default {
  title: "Forms"
  // component: Forms
};

const DryCheckbox = Checkbox.Default;
const DryLabel = Label.Default;
const DrySelectionControl = SelectionControl.Default;
const DryChip = Chip.Default;
const DryPassword = Password.Default;
const DrySlider = Slider.Default;
const DryDatePicker = DatePicker.Default;
const DryRadio = Radio.Default;
const DrySwitch = Switch.Default;
const DryInput = Input.Default;
const DrySelect = Select.UserTip;
const DryFileUpload = FileUpload.Default;

// export {
//   DryCheckbox,
//   DryLabel,
//   DrySelectionControl,
//   DryChip,
//   DryPassword,
//   DrySlider,
//   DryDatePicker,
//   DryRadio,
//   DrySwitch,
//   DryInput,
//   DrySelect,
//   DryFileUpload
// };
storiesOf("Components/Forms/Checkbox", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryCheckbox />);

storiesOf("Components/Forms/Label", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryLabel />);

storiesOf("Components/Forms/SelectionControl", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DrySelectionControl />);

storiesOf("Components/Forms/Chip", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryChip />);

storiesOf("Components/Forms/Password", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryPassword />);

storiesOf("Components/Forms/Slider", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DrySlider />);

storiesOf("Components/Forms/DatePicker", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryDatePicker />);

storiesOf("Components/Forms/Radio", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryRadio />);

storiesOf("Components/Forms/Switch", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DrySwitch />);

storiesOf("Components/Forms/Input", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryInput />);

storiesOf("Components/Forms/Select", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DrySelect />);

storiesOf("Components/Forms/FileUpload", module)
  .addParameters({
    readme: {
      codeTheme: "duotone-sea"
    }
  })
  .add("Default", () => <DryFileUpload />);
