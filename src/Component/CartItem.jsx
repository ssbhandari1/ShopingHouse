import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart } from '../slice/CartSlice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const CartItem = () => {
  const dispatch=useDispatch()
  const[quantity,setQuantity]=useState(1);
  const [price,setPrice]=useState([])
    const cartData=useSelector((state)=>state.cart.map((item)=>{
      return({
        ...item,
        quantity:1
      })
    }))

    console.log(cartData)


const handleDelete=(id)=>{
  const updateDlt=cartData.filter((item)=>item.id!==id)
  console.log(updateDlt)
  dispatch(removeToCart(updateDlt))
}



  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0)", width: '100%', height: "90vh",   }}>
 <Grid container gap='4rem' sx={{  width: '100%', height: "90%", borderRadius: '10px', overflowY: 'auto',}}>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">SNo</StyledTableCell>
            <StyledTableCell align="center">Product</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            {/* <StyledTableCell align="center">Quantity</StyledTableCell> */}
             <StyledTableCell align="center">Remove</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {cartData && cartData.map((item , index)=>{
        
          return(
 <StyledTableRow key={item.id}>
              <StyledTableCell align="center" sx={{width:'60px'}}>
            {index+1}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{width:'200px'}}> 
              <CardMedia
                  component="img"
                  sx={{ width: '170px', height: '170px', objectFit: 'fill',border:'1px solid black' ,}}
                  image={item.image}
                  alt="product"
                />
                </StyledTableCell>
              <StyledTableCell align="center" sx={{width:'200px'}}>{item.title}</StyledTableCell>
              <StyledTableCell align="center">Rs.{item.price}</StyledTableCell>
              {/* <StyledTableCell align="center" sx={{height:'170px',display:'flex',alignItems:'center',justifyContent:"space-around"}}><RemoveIcon sx={{cursor:'pointer'}} onClick={()=>handleQuantity(item,'minus')}/>{item.quantity}<AddIcon sx={{cursor:'pointer'}} onClick={()=>handleQuantity(item,'plus')}/></StyledTableCell> */}
                <StyledTableCell align="center"><RestoreFromTrashIcon sx={{color:'red'}} onClick={()=>handleDelete(item.id)}/></StyledTableCell>
            </StyledTableRow>
          )
        })}
           
     
        </TableBody>
      </Table>
    </TableContainer>
  
 </Grid>
   {/* <Typography sx={{color:'white',textAlign:'end',width:'90%',height:'8vh',marginRight:'1rem',fontSize:'1.5rem'}}> Total amount : Rs.{price}</Typography> */}
    </Box>
  )
}

export default CartItem