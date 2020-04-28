import React from "react";
import { useSelector } from "react-redux";

import LoginModal from "../containers/shared/modals/LoginModal";
import RegisterModal from "../containers/shared/modals/RegisterModal";
import UnauthModal from "../containers/shared/modals/UnauthModal";

const modalLookup = {
  LoginModal,
  RegisterModal,
  UnauthModal,
};

const ModalManager = () => {
  const currentModal = useSelector((state) => state.modals, []);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
};

export default ModalManager;
