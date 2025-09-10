import { useState } from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Branches from './components/Branches'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile';

function App() {

  const [auth, setauth] = useState(false)
  // const [auth, setauth] = useState(true)
  setTimeout(() => {
    console.log(userdetails);
  }, 5000);
  const [userdetails, setuserdetails] = useState([
    {
      username: 'Alan Walker',
      gmail: 'alanwalker@gmail.com',
      password: '12345678',
      phoneNo: '1234567890',
      state: 'Maharashtra',
      city: 'Mumbai',
      address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maxime inventore laboriosam officia atque ipsum ea iusto. Iste ullam doloremque, deserunt harum sapiente, perferendis delectus in beatae, voluptate sed optio.',
      pincode: '400015',
      createdOn: '2025-08-26T18:30:00.000Z'
    }
  ])

  const [prodD, setprodD] = useState([
    {
      productName:'Headphones',
      productImg:"/src/components/headphone.png",
      productDescription:'Give the enormouse Music experience to the user',
      productPrice:'100.00',
      productReceiptNo:'1234-1234',
      productInvoiceNo:'12cfcvy5t67',
    }
  ])

  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar auth={auth} /><Hero /><Products auth={auth} userdetails={userdetails} setuserdetails={setuserdetails} prodD={prodD} setprodD={setprodD}/><Services /><Branches /><Footer /></>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login auth={auth} setauth={setauth} userdetails={userdetails} setuserdetails={setuserdetails} />} />
        <Route path='/profile' element={<Profile auth={auth} setauth={setauth} userdetails={userdetails} setuserdetails={setuserdetails} />} />
      </Routes>
    </>
  )
}

export default App
