import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  largeButton: {
    minWidth: '200px', // Set your desired width
    minHeight: '48px', // Set your desired height
    fontSize: '1.25rem', // Set your desired font size
  },
});

const LargeButton = () => {
  const classes = useStyles();

  return (
    <Button className={classes.largeButton} variant="contained" color="primary">
      Large Button
    </Button>
  );
}

export default LargeButton;
