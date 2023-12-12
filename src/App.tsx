import './App.css'
import Productf from './component/main/Product'
import SideBar from './component/navbar/sidebar'
import { Routes, Route } from 'react-router-dom';
import MainShoppingCar from './component/shoppingCart/mainShoppingCart';
import Navbar from './component/navbar/navbar';
import { useState } from 'react';
import Favority from './component/Favority';
import Layout from './component/main/Layout';
import LogIn from "./component/LogIn"


function App() {

  const [navbarstatus, setNavbarStatus] = useState(false)


  const changeStatusOfSidebar = () => {
    setNavbarStatus(!navbarstatus)
  }


  return (
    <>
      <Navbar />
      {/* <SideBar setIsOpen={changeStatusOfSidebar} isOpen={navbarstatus} /> */}
      <Routes>
        <Route path="/" element={<Productf />} />
        <Route path="/LogIn" element={<LogIn />} />
        {/* protect element */}
        <Route path='/' element={
        
        <Layout />
        
        }>
          <Route path="/WarenKorp" element={<MainShoppingCar />} />
          <Route path="/Favority" element={<Favority />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
