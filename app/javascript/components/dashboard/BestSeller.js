import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'; import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Button,
  Paper, Typography, IconButton,
  Stack
} from '@mui/material'
import {COLORS, BUTTONS} from '../../constants'
const BestSeller = () => {
  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <div>
      <Button variant="text" sx={BUTTONS.PRIMARY} endIcon={<AddBoxIcon />}>
        Best Seller
      </Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1">
                  Name
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default BestSeller
