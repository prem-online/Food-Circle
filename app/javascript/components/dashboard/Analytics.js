import React from 'react'
import {
  Gauge,
  gaugeClasses
} from '@mui/x-charts/Gauge';
import { Typography, Stack, IconButton } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {COLORS} from '../../helpers/colors'
import CellTowerIcon from '@mui/icons-material/CellTower';
import {humanCurrency} from '../../helpers/common'
import millify from 'millify';
const Analytics = ({day, data}) => {
  const settings = {
    width: 200,
    height: 200,
    value: data=='' ? 0 : parseInt(data),
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
            fontSize: 30,
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
