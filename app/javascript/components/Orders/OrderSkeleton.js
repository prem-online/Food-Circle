import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Pagination, Skeleton } from '@mui/material';

const OrderSkeleton = () => {
  return (
      <TableRow>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={15} />
        </TableCell>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={15} />
        </TableCell>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={15} />
        </TableCell>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={15} />
        </TableCell>
      </TableRow>
  )
}

export default OrderSkeleton
