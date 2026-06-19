import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Status from './components/Status'
import Form from './components/Form'
import Table from "./components/Table"
import data from "./data/data"
import Footer from './components/Footer'
function App() {

  const [dataUsers,setDataUser] = useState(data);
  return (
    <>
        <Header></Header>
        <Status dataUsers = {dataUsers}></Status>
        <div className = "gap-3 mt-4">
          <Form dataUsers = {dataUsers} setDataUser = {setDataUser}></Form>
          <Table dataUsers = {dataUsers}></Table>
        </div>
        <Footer></Footer>
    </>
  )
}

export default App
