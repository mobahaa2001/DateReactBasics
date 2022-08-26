import { Row, Col } from 'react-bootstrap'
import React from 'react'

const DatesAction = ({ deleteData, onViewData }) => {
  return (
    <div>
      {' '}
      <Row className="justify-content-center my-2">
        <Col sm="8" className="d-flex justify-content-between">
          <button onClick={deleteData} className="btn-style p-2">
            Hide
          </button>
          <button onClick={onViewData} className="btn-style p-2">
            View
          </button>
        </Col>
      </Row>
    </div>
  )
}
export default DatesAction
