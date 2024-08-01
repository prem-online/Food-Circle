import React from 'react'
import {
  Gauge,
  gaugeClasses
} from '@mui/x-charts/Gauge';
import { Typography, Stack, IconButton } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {COLORS} from '../../constants'
import CellTowerIcon from '@mui/icons-material/CellTower';

const Analytics = ({day, data}) => {
  const settings = {
    width: 200,
    height: 200,
    value: data==''? 0: data,
  };

  const theme = createTheme({
    palette: {
      background: {
        default: COLORS.PRIMARY, // Light grey background for the overall application
        paper: '#FFFFFF',   // White background for paper surfaces
      },
    },
  });
  
  return (
    <>
      <Stack>
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={() => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#52b202',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.background.default,
          },
        })}
      />
      <Typography sx={{textAlign: 'center'}}>
        {day} Sales
      </Typography>
      </Stack>
    </>
  )
}

export default Analytics
