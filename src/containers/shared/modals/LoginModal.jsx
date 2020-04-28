import React from "react";
import { useDispatch } from "react-redux";

import { Modal } from "semantic-ui-react";

import LoginForm from "../../auth/LoginForm";
import { closeModal } from "../../../redux/actions/modalActions";

const LoginModal = () => {
  const dispatch = useDispatch();

  return (
    <Modal size="mini" open={true} onClose={() => dispatch(closeModal())}>
      <Modal.Header>Login to Re-vents</Modal.Header>
      
      <Modal.Content>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
