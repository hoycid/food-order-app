import { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../Card/Card";

import classes from "./Modal.module.css";

export const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClickDim} />;
};

export const Modal = props => {
  return <Card className={classes.modal}>{props.children}</Card>;
};

const ModalDim = props => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickDim={props.onClickDim} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal>{props.children}</Modal>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ModalDim;
