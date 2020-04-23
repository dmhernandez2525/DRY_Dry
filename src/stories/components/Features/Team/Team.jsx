import React from "react";
import { action } from "@storybook/addon-actions";
import { Button as TEST } from "@storybook/react/demo";
import { Team as DryTeam } from "../../../../components";

const Team = () => <DryTeam onClick={action("clicked")}>Hello Team</DryTeam>;

export default Team;
