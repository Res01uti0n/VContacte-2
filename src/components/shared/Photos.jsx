import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { toastr } from "react-redux-toastr"
import { compose } from "redux"
import { firestoreConnect } from "react-redux-firebase"

import { Segment, Header, Grid, Divider, Button } from "semantic-ui-react"

import DropZoneInput from "./DropZoneInput"
import CropperInput from "./CropperInput"
import { uploadProfileImage, deletePhoto, setMainPhoto } from "../../actions/userActions"
import UserPhotos from "./UserPhotos"

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  photos: state.firestore.ordered.photos,
  loading: state.async.loading
})

const actions = {
  uploadProfileImage,
  deletePhoto,
  setMainPhoto
}

const query = ({auth}) => {
  return [
    {
      collection: "users",
      doc: auth.uid,
      subcollections: [{collection: "photos"}],
      storeAs: "photos"
    }
  ]
}

const Photos = ({uploadProfileImage, photos, profile, deletePhoto, setMainPhoto, loading}) => {
  const [files, setFiles] = useState([])
  const [image, setImage] = useState(null)

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [files])

  const handleUploadImage = async () => {
    try {
      await uploadProfileImage(image, files[0].name)
      handleCancelCrop()
      toastr.success("Success!", "Photo has been uploaded")
    } catch (error) {
      console.log()
      toastr.error("Error!", "Something went wrong")
    }
  }

  const handleCancelCrop = () => {
    setFiles([])
    setImage(null)
  }

  const handleDeletePhoto = async photo => {
    try {
      await deletePhoto(photo)
    } catch (error) {
      toastr.error("Error!", "Problem deleting the photo")
    }
  }

  const handleSetMainPhoto = async photo => {
    try {
      await setMainPhoto(photo)
    } catch (error) {
      toastr.error("Error!", "Problem changing the photo")
    }
  }

  return (
    <Segment style={{marginTop: 100}}>
      <Header dividing size="large" content="Your photos" />

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header color="teal" sub content="1 Add photo" />
            <DropZoneInput setFiles={setFiles} />
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={4}>
            <Header color="teal" sub content="2 Resize photo" />
            {files.length > 0 && (
              <CropperInput setImage={setImage} imagePreview={files[0].preview} />
            )}
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={4}>
            <Header color="teal" sub content="3 Preview photo" />

            {files.length > 0 && (
              <>
                <div 
                  className="img-preview" 
                  style={{
                    minHeight: 200, 
                    minWidth: 200, 
                    overflow: "hidden"
                  }}
                > 
                </div>
                
                <Button.Group>
                  <Button loading={loading} onClick={handleUploadImage} icon="check" positive />
                  <Button disabled={loading} onClick={handleCancelCrop} icon="close" />
                </Button.Group>
              </>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      
      <UserPhotos 
        photos={photos} 
        profile={profile} 
        handleDeletePhoto={handleDeletePhoto}
        handleSetMainPhoto={handleSetMainPhoto} 
      />
    </Segment>
  )
}

export default compose(connect(mapState, actions), firestoreConnect(auth => query(auth)))(Photos)