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
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
    createData('Deeana Scerlett', 'Male', '+880123456789', 'hello@gmail.com', '28'),
    createData('James Ford', 'Famale', '+880123456789', 'hello@gmail.com', '26'),
];

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default function Pataientstable() {
    return (
        <ThemeProvider theme={darkTheme}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>SL</StyledTableCell>
                            <StyledTableCell>Patient Name</StyledTableCell>
                            <StyledTableCell align="left">Gender</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Age</StyledTableCell>
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
                                <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </ThemeProvider>
    );
}
