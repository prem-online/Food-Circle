import React from 'react'
import { Skeleton, TableCell, TableRow } from '@mui/material'

const BestSellerSkeleton = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton variant="rectangular" sx={{margin: 0}}width={90} height={20}/>
      </TableCell>
    </TableRow>
  )
}

export default BestSellerSkeleton
