import React from 'react'
import { Stack, Skeleton } from '@mui/material';

const EditFormSkeleton = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={240} height={56} />
      <Skeleton variant="rectangular" width={240} height={56} />
    </Stack>
  )
}

export default EditFormSkeleton
