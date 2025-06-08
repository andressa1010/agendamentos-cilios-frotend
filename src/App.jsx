import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Agendamento from "./Pages/agendamentos"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/agendamentos/:id" element={<Agendamento />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
