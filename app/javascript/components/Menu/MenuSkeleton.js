import React from 'react'
import { TableCell, TableRow, Skeleton } from '@mui/material';

const MenuSkeleton = () => {
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
      </TableRow>
  )
}

export default MenuSkeleton
