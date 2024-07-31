import React from 'react'
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,Gauge,
  useGaugeState,gaugeClasses
} from '@mui/x-charts/Gauge';
import { Typography, Stack } from '@mui/material';
const settings = {
  width: 200,
  height: 200,
  value: 60,
};
const Analytics = ({day}) => {

  return (
    <>
      <Stack>
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#52b202',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
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
