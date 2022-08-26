import { Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { person } from './data'
import DatesCount from './components/DatesCount'
import DatesList from './components/DatesList'
import DatesAction from './components/DatesAction'
function App() {
  const [perData, setPerData] = useState(person)
  const onHide = () => {
    setPerData([])
  }
    const onView = () => {
    setPerData(person)
    }
  useEffect(() => {
    setPerData([])
  },[])
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={perData} />
        <DatesList person={perData} />
        <DatesAction deleteData={onHide} onViewData={onView} />
      </Container>
    </div>
  )
}

export default App
