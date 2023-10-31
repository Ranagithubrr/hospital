import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {FaTimes, FaCheck} from 'react-icons/fa'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),
  createData('Deeana Scerlett', 'hello@gmail.com', 'Pataients', '24/08/2023', 'Resolved'),
  createData('James Ford', 'test.demo@gmail.com', 'Doctor', '26/08/2023', 'Pending'),

];

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const AccountsReviewtable = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>SL</StyledTableCell>
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Created At</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">1</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="left">{row.fat}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                <div className='pt-3'>
                  <button title='Decline' className='px-3 py-1 rounded mx-2  bg-red-500 text-gray-200 text-sm font-semibold'><FaTimes /></button>
                  <button title='Approve' className='px-3 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold'><FaCheck /></button>
                </div>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default AccountsReviewtable