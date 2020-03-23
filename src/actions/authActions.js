import { SubmissionError, reset } from "redux-form"
import { toastr } from "react-redux-toastr"

import { closeModal } from "./modalActions"

export const signIn = creds => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
      throw  new SubmissionError({
        _error: "Login failed"
      })
    }
  }
}

export const registerUser = user => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
      console.log(createdUser)
      console.log(user)
      await createdUser.user.updateProfile(
        {displayName: user.name}
      )
      let newUser = {
        displayName: user.name,
        createdAt: firestore.FieldValue.serverTimestamp()
      }
      await firestore.set(`users/${createdUser.user.uid}`, {...newUser})
      dispatch(closeModal())
    } catch (error) {
      console.log(error)
      throw new SubmissionError({
        _error: "Register failed"
      })
    }
  }
}

export const socialSignIn = selectedProvider => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
      dispatch(closeModal())
      let user = await firebase.login({
        provider: selectedProvider,
        type: "popup"
      })

      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          createdAt: firestore.FieldValue.serverTimestamp()
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const updatePassword = creds => {
  return async (dispatch, getState, { getFirebase}) => {
    const firebase = getFirebase()
    const user = firebase.auth().currentUser

    try {
      await user.updatePassword(creds.newPassword1)
      await dispatch(reset("account"))
      toastr.success("Success!", "Your password has been changed")
    } catch (error) {
      console.log(error)
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
}

