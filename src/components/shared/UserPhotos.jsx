import React from "react"

import { Header, Card, Image, Button } from "semantic-ui-react"

export default function UserPhotos({profile, photos, handleDeletePhoto, handleSetMainPhoto}) {
  let filteredPhotos;

  if (photos) {
    filteredPhotos = photos.filter(photo => photo.url !== profile.photoURL)
  }

  return (
    <>
      <Header sub color="teal" content="All photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL || "default.png"} />
          <Button positive>Main photo</Button>
        </Card>

        {filteredPhotos && filteredPhotos.map(photo => (
          <Card key={photo.id}>
            <Image src={photo.url} />

            <div className="ui two buttons">
              <Button onClick={() => handleSetMainPhoto(photo)} basic color="green" content="Main" />
              <Button onClick={() => handleDeletePhoto(photo)} icon="trash" color="red" />
            </div>
          </Card>
        ))}
      </Card.Group>
    </>
  )
}
