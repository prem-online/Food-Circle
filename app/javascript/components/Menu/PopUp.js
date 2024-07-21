import React from 'react'
import {Snackbar, Alert} from '@mui/material'

const PopUp = ({
    popup_type, 
    message,
    handleClose,
    open
  }) => {

  const vertical= 'top'
  const horizontal= 'center'

  return (
    <div>
      <Snackbar 
        open={open} 
        autoHideDuration={1200} 
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={popup_type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default PopUp
