import React from "react";
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

export {
  DryCheckbox,
  DryLabel,
  DrySelectionControl,
  DryChip,
  DryPassword,
  DrySlider,
  DryDatePicker,
  DryRadio,
  DrySwitch,
  DryInput,
  DrySelect,
  DryFileUpload
};
