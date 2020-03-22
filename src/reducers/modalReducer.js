import { createReducer } from "../utils/reducerUtils"
import { MODAL_CLOSE, MODAL_OPEN } from "../actions/modalConstants"

const initialState = null

const openModal = (state, payload) => {
  const {modalType, modalProps} = payload
  return {modalType, modalProps}
}

const closeModal = state => null

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
})