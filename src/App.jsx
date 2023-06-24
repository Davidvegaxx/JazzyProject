import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>
      <Footer/>      
      </BrowserRouter>
    </>
  )
}

export default App
