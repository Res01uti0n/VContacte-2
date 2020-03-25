import React from "react"
import LazyLoad from "react-lazyload"

import { Segment, Grid, Header, Image } from "semantic-ui-react"

const UserDetailedPhotos = ({ photos }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="image" content="Photos" />

        <Image.Group size="small">
          {photos && photos.map(photo => (
            <LazyLoad
              key={photo.id}
              height={150}
              placeholder={<Image src="" />}
            >
              <Image src={photo.url} />
            </LazyLoad>
          ))}
        </Image.Group>
      </Segment>
    </Grid.Column>
  )
}

export default UserDetailedPhotos