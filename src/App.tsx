import './App.css'
import Productf from './component/main/Product'
import Navbar from './component/navbar/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainShoppingCar from './component/shoppingCart/mainShoppingCart';


function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Productf />} />
        <Route path="/WarenKorp" element={<MainShoppingCar />} />
      </Routes>

    </>
  )
}

export default App
