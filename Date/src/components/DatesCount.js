import { Row, Col } from 'react-bootstrap'
import React from 'react'

const DatesCount = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8" className="">
          You have {person.length} Dates
        </Col>
      </Row>
    </div>
  )
}

export default DatesCount
