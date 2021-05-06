import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

function ProfilePhoto() {
    return (
        <Container>
  <Row>
    
    <Col xs={6} md={4}>
      <Image className="pic" src="pic.jpg" thumbnail />
    </Col>
   
  </Row>
</Container>
    )
}

export default ProfilePhoto
