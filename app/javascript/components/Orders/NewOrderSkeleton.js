import React from 'react'
import { TableCell, TableRow, Skeleton, Stack } from '@mui/material';

const NewOrderSkeleton = () => {
  return (
      <TableRow>
        <TableCell>
          <Skeleton animation="wave" variant="rectangular" width={12} height={15} />
        </TableCell>
        <TableCell>
          <Skeleton animation="wave" variant="rectangular" width={100} height={15} />
        </TableCell>
        <TableCell>
          <Stack direction="column" spacing={1}>
            <Skeleton animation="wave" variant="rectangular" width={180} height={30} />
            <Stack direction="row" spacing={1}>
              <Skeleton animation="wave" variant="circular" width={45} height={45} sx={{mt: 2}}/>
              <Skeleton animation="wave" variant="circular" width={45} height={45} sx={{mt: 2}}/>
              <Skeleton animation="wave" variant="circular" width={45} height={45} sx={{mt: 2}}/>
            </Stack>
          </Stack>

        </TableCell>
        <TableCell>
          <Skeleton animation="wave" variant="rectangular" width={80} height={15} />
        </TableCell>
      </TableRow>
  )
}

export default NewOrderSkeleton
