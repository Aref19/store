import './App.css'
import Productf from './component/main/Product'
import SideBar from './component/navbar/sidebar'
import { Routes, Route } from 'react-router-dom';
import MainShoppingCar from './component/shoppingCart/mainShoppingCart';
import Navbar from './component/navbar/navbar';
import { useState } from 'react';


function App() {

  const [navbarstatus, setNavbarStatus] = useState(false)


  const changeStatusOfSidebar = () => {
    setNavbarStatus(!navbarstatus)
  }


  return (
    <>
      <Navbar />
      <SideBar setIsOpen={changeStatusOfSidebar} isOpen={navbarstatus} />
      <Routes>
        <Route path="/" element={<Productf />} />
        <Route path="/WarenKorp" element={<MainShoppingCar />} />
      </Routes>
    </>

  )
}

export default App
