import React from "react";
import { useDispatch } from "react-redux";

import { Modal } from "semantic-ui-react";

import { closeModal } from "../../../redux/actions/modalActions";
import RegisterForm from "../../auth/RegisterForm";

export default function RegisterModal() {
  const dispatch = useDispatch()

  return (
    <Modal size="mini" open={true} onClose={() => dispatch(closeModal)}>
      <Modal.Header>Sign Up to Vcontacte!</Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <RegisterForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}
