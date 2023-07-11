import React from 'react'
import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate()
  const state=useSelector((state)=>state.cart)
  console.log(state)
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
      <Avatar src="src/assets/anim.jpg" onClick={()=>{navigate('/')}} />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Shoping House
      </Typography>
      <IconButton aria-label="cart" onClick={()=>navigate('/cartItem')} >
  <Badge badgeContent={state.length} color="secondary">
    <ShoppingCartIcon />
  </Badge>
</IconButton>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar
