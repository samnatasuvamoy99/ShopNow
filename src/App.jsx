
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './Pages/Home';
import {Cart} from './Pages/Cart';
import {Navbar} from './Components/Navbar'
import {Login} from './Pages/Login'
import {CheckoutCard } from './Pages/Paycard'
import{Footer} from './Components/Footer'


function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar/>

          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Cart' element={<Cart/>}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/CheckCard' element={<CheckoutCard/>}> </Route>
          </Routes>

          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
