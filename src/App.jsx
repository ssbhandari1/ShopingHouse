import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from './slice/ProductSlice'
import { Box } from '@mui/material'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Component/HomePage'
import CartItem from './Component/CartItem'



function App() {



  return (
    <Box sx={{width:'100%',height:'100vh',display:'flex',flexDirection:'column'}}>
       <Navbar/>
<Box sx={{width:"100%",height:"90vh",display:'flex',alignItems:'center',justifyContent:'center'}}>
  
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/cartItem' element={<CartItem/>}/>
</Routes>
</Box>
    </Box>
  )
}

export default App
