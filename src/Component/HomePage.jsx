import { Box, Button, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../slice/ProductSlice'
import { addToCart } from '../slice/CartSlice';
import { useNavigate } from 'react-router-dom';
import { ContactPageSharp } from '@mui/icons-material';

const HomePage = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.product)
  const cartData=useSelector((state)=>state.cart)
 
const handleSelectCart=(id)=>{
const selectedItem=state.data.find((item)=>item.id===id)
const itemExistsInCart = cartData.some((item) => item.id === selectedItem.id);
if(!itemExistsInCart){
  dispatch(addToCart(selectedItem));
}else {
  alert('The item is already exisist')
}
 


}

  useEffect(() => {
    dispatch(getProduct())
  }, [])
  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0,.5)", width: '95%', height: "80vh", overflowY: 'auto', padding: '2rem' }}>
      <Grid container gap='4rem' sx={{ backgroundColor: "", width: '100%', height: "100%", borderRadius: '10px', }}>
        {state.data && state.data.map((item) => {
          return (
            <Grid key={item.id} item xs={2.5} sx={{ background: '', height: "300px" }}>
              <Paper elevation={10} sx={{ height: "300px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '0 .5rem' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '150px', height: '150px', objectFit: 'fill' }}
                  image={item.image}
                  alt="product"
                />
                <Typography variant='h6' sx={{ textAlign: "center", fontSize: '.8rem', fontWeight: '600' }}>{item.title}</Typography>
                <Stack direction="row" alignItems='center' justifyContent='space-around' spacing={2}>
                  <Typography sx={{ fontSize: '.7rem', fontWeight: '600' }}>Price : {item.price}</Typography> <Typography sx={{ fontSize: '.7rem', fontWeight: '600', background: 'green', padding: '.3rem', color: 'white', display: 'flex', borderRadius: '5px' }}>{item.rating.rate}<StarIcon sx={{ color: 'white', fontSize: '.7rem' }} /></Typography>
                </Stack>
                <Button variant="contained" color='secondary' onClick={()=>handleSelectCart(item.id)}> add to cart</Button>
              </Paper>

            </Grid>
          )
        })}

      </Grid>
    </Box>
  )
}

export default HomePage