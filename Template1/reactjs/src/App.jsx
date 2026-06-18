import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import StatusOrder from './components/StatusOrder'
import Table from './components/Table'
import Form from './components/Form'
import data from "./data/data"
function App() {
  const [dataUsers,setDataUser] = useState(data);
  return (
    <>
        <Header></Header>
        <StatusOrder dataUsers = {dataUsers}></StatusOrder>
        <div className = "d-flex mt-4 gap-4 ms-3 me-3">
            <Table className = "flex-fill" dataUsers = {dataUsers}></Table>
            <Form className = "flex-fill" dataUsers = {dataUsers} setDataUser = {setDataUser}></Form>
        </div>
    </>
  )
}

export default App
