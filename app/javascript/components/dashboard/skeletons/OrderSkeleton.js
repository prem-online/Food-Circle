import React from 'react'
import { Skeleton,TableCell, TableRow } from '@mui/material'
import {getRandomUniqueSixDigits} from '../../../helpers/common'
const OrderSkeleton = () => {
  return (
      <TableRow
        key={getRandomUniqueSixDigits}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell component="th" scope="row">
          <Skeleton variant="rectangular" width={75} height={20} />
        </TableCell>
        <TableCell><Skeleton variant="rectangular" width={90} height={20} /></TableCell>
        <TableCell><Skeleton variant="rectangular" width={120} height={20} /></TableCell>
        <TableCell align="right">
          
        </TableCell>
      </TableRow>
  )
}

export default OrderSkeleton
