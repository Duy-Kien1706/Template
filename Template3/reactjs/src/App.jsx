import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Card from './components/Card'

function App() {


  return (
    <>
      <Header></Header>
      <div className="container mt-4 d-flex gap-3">
          <Form></Form>
          <Card></Card>
      </div>
    </>
  )
}

export default App
