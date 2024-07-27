import { Container } from '@mui/material'
import { Table, Paper, TableHead, TableRow, TableCell, TableBody,TableContainer,
  Stack, Button, Pagination, IconButton
 } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import BasicDashboard from '../dashboard/BasicDashboard'
import MenuSkeleton from './MenuSkeleton'

import { useLogin } from '../../helpers/useLogin';
import { sleep } from '../../helpers/common';
import { BASE_URL } from '../../constants';

const MenuList = () => {
  const [page, setPage] = useState(1);
  const tableRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const token = useLogin()

  useEffect(()=>{
    const callProductListApi = async () => {
      setLoading(true);
      await sleep(1000); // Simulate delay
      const url = `${BASE_URL}api/v1/products?page=${page}&per=10`
      axios.get(url, { headers: { token: token } })
      .then(response => {
        console.log(response)
        console.log(page)
          let total = response.data.meta.total
          let finalTotal = total/10
          finalTotal = Math.ceil(finalTotal)
          finalTotal = finalTotal > 10 ? finalTotal : finalTotal
          setTotalPages(finalTotal)
          setProducts(response.data.data);
          setLoading(false);
        })
      .catch((error) => {
          console.log('error ' + error);
        });
    };
  
    if (token != ''){
      callProductListApi();
    }
  },[token, page])
  
  const handlePagination = (e, value) => {
    setPage(value);
  };

  const handleDelete = async (product) => {
    const url = `${BASE_URL}api/v2/products/${product.id}`;
    await axios.delete(url, { headers: { token: token } })
     .then(response => {
        setProducts(products.filter(p=>p.id!== product.id))
      })
     .catch((error) => {
          console.log('error'+ error);
        });
  }

  return (
    <>
      <BasicDashboard></BasicDashboard>
      <Container>
        <Stack direction='row' mb={2}>
          <Button variant='contained' href='/menus/new'>
            New Menu
          </Button>
        </Stack>
        <TableContainer component={Paper}
        >
          <Table ref={tableRef}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <>
                  <MenuSkeleton/>
                  <MenuSkeleton/>
                  <MenuSkeleton/>
                </>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.attributes.name}</TableCell>
                    <TableCell>{product.attributes.price}</TableCell>
                    <TableCell>
                      <a href={`/menus/${product.id}/edit`}>
                        <IconButton size="small" aria-label="edit" >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </a>
                      <IconButton 
                        aria-label="delete" size="small"
                        onClick={()=>handleDelete(product)}
                        >
                        <DeleteIcon fontSize="small"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack  
          >
          <Pagination sx={{ mx: "auto", pb: 1, pt: 1 }} count={totalPages} color="primary" onChange={handlePagination} />
        </Stack>
      </Container>
    </>
  )
}

export default MenuList
