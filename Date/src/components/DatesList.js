import { Row, Col } from 'react-bootstrap'
import React from 'react'

const DatesList = ({ person }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangl p-2">
            {person.length ? (
              person.map((item) => {
                return (
                  <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                    <img className="img-avatar" src="moBahaadev.jpg" />
                    <div className="px-3">
                      <p className="d-inline fs-5">{item.name}</p>
                      <p className="fs-6">{item.date}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <h2 className="p-5 text-center">You don't have any dates</h2>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DatesList
