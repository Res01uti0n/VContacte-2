import React from "react"
import { connect } from "react-redux"

import { Modal } from "semantic-ui-react"

import { closeModal } from "../../actions/modalActions"
import RegisterForm from "./RegisterForm"

const actions = { closeModal }

const LoginModal = ({ closeModal }) => {
  return (
    <Modal
      size="mini"
      open={true}
      onClose={closeModal}
    >
      <Modal.Header>
        Set up to Vcontacte
      </Modal.Header>

      <Modal.Content>
        <Modal.Description>
          <RegisterForm />
        </Modal.Description>
      </Modal.Content>

    </Modal>
  )
}

export default connect(null, actions)(LoginModal)