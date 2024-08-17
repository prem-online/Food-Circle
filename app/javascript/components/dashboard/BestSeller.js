import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useLogin } from '../../helpers/useLogin';
import { BASE_URL } from '../../constants';
import AddBoxIcon from '@mui/icons-material/AddBox'; import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Button,
  Paper, Typography, IconButton,
  Stack
} from '@mui/material'
import {COLORS, BUTTONS} from '../../constants'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import BestSellerSkeleton from './skeletons/BestSellerSkeleton'
const BestSeller = () => {
  const [products, setProducts] = useState('');
  const token = useLogin();

  useEffect(()=>{
    if(token !=''){

      const fetchProducts = async ()=>{
        const url = `${BASE_URL}api/v2/best_sellers/`
        axios.get(url, {headers: {token: token}})
        .then(async (response) => {
          const data = await response.data
          setProducts(data.data)
        }).catch(error => {console.log(error) });
      }
     fetchProducts()
    }
  },[token])
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Button variant="text" href="/menu/list" sx={BUTTONS.PRIMARY}>
          Best Seller
        </Button>
        <IconButton href="/menus/new">
          <AddBoxIcon color="primary"/>
        </IconButton>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  Name
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            products==''? (
              <>
                <BestSellerSkeleton/>
                <BestSellerSkeleton/>
                <BestSellerSkeleton/>
                <BestSellerSkeleton/>
                <BestSellerSkeleton/>
              </>
            ):
            products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">

                <Stack direction="row">
                    <Stack direction="row">
                        <Typography>
                          {product.attributes.name}
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                      <IconButton 
                        aria-label="delete" size="small"
                        >
                        <TrendingUpIcon fontSize="small"/>
                      </IconButton>
                    </Stack>
                </Stack> 
              
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BestSeller
