import './App.css'
import AddProductForm from './Components/AddProduct/AddProduct'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />

        {/* Add your routes here */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
        {/* </Routes> */}

        {/* <AddProductForm/> */}
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
