import React, { useEffect, useState } from "react";
import classnames from "classnames";

import "./ModalBox.scss";
// interface ModalBoxProps {
//   id: string;
//   name: string;
//   userTip: string;
//   onClick: Function;
//   onChange: Function;
//   onBlur: Function;
//   disable: boolean;
//   classNameBackground: string;
//   classNameChild: string;
//   errorMes: string;
//   styles: object;
//   passProps: object;
//   closeModal: Function;
//   openOrClosedBool: undefined;
//   children: React.Component
// }
// the modal app will take a bool that handles its state or it will handle its own i will have to create an onclick function in here that can be overwritten but the on click default will handle state update and rerender
const ModalBox = ({
  id,
  name,
  userTip,
  onClick,
  onChange,
  onBlur,
  onFocus,
  disable,
  classNameBackground,
  classNameChild,
  errorMes,
  styles,
  passProps,
  closeModal,
  openOrClosedBool,
  children
}) => {
  // pass a boolean and that can control the state of open or closed for the modal
  const [component, setcomponent] = useState(null);
  const [openOrClosed, setopenOrClosed] = useState(openOrClosedBool);

  useEffect(() => {
    setopenOrClosed(openOrClosedBool);
  }, [openOrClosedBool]);

  useEffect(() => {
    switch (openOrClosed) {
      case true:
        setcomponent(children);
        break;
      default:
        setcomponent(null);
    }
  }, [openOrClosedBool, onClick, openOrClosed]);

  return component ? (
    <div
      onClick={() =>
        closeModal ? closeModal() : setopenOrClosed(!openOrClosed)
      }
      className={classnames({
        [classNameBackground]: true,
        modal__disabled: disable
      })}
    >
      <div
        className={classnames({
          [classNameChild]: true,
          modal__disabled: disable
        })}
        onClick={e => e.stopPropagation()}
      >
        {component}
      </div>
    </div>
  ) : null;
};

ModalBox.defaultProps = {
  id: "",
  name: "",
  userTip: "",
  onClick: null,
  onChange: null,
  onBlur: null,
  disable: false,
  classNameBackground: "modal-background",
  classNameChild: "modal-child",
  errorMes: "",
  styles: null,
  passProps: null,
  closeModal: null,
  openOrClosedBool: undefined,
  children: null
};

export default ModalBox;
