import React from "react";

import "./MeettheTeam.scss";

const MeettheTeam = ({
  id,
  name,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  className,
  errorMes,
  styles,
  passProps,
}) => {
  return (
    <div onClick={() => onClick("DryMeettheTeam")} className="dry-meettheTeam">
      DryMeettheTeam
    </div>
  );
};

MeettheTeam.defaultProps = {
  id: "",
  name: "",
  userTip: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  disable: false,
  className: "",
  errorMes: "",
  styles: null,
  passProps: null,
};

export default MeettheTeam;
