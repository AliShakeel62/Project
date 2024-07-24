import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from "@mui/material"

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props: any) {
  const { temp, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11 } = props;
  const navigate = useNavigate();

  const handleEdit = (row: any) => {
    navigate("/Home/StudentEdit", { state: { student: row } });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{value1}</StyledTableCell>
            <StyledTableCell align="center">{value2}</StyledTableCell>
            <StyledTableCell align="center">{value3}</StyledTableCell>
            <StyledTableCell align="center">{value4}</StyledTableCell>
            <StyledTableCell align="center">{value5}</StyledTableCell>
            <StyledTableCell align="center">{value6}</StyledTableCell>
            <StyledTableCell align="center">{value7}</StyledTableCell>
            <StyledTableCell align="center">{value8}</StyledTableCell>
            <StyledTableCell align="center">{value9}</StyledTableCell>
            <StyledTableCell align="center">{value10}</StyledTableCell>
            <StyledTableCell align="center">{value11}</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {temp.map((row: any) => (
            <StyledTableRow key={row.firstName}>
              <StyledTableCell component="th" scope="row">
                {row.firstName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.middleName}</StyledTableCell>
              <StyledTableCell align="center">{row.lastName}</StyledTableCell>
              <StyledTableCell align="center">{row.fatherName}</StyledTableCell>
              <StyledTableCell align="center">{row.motherName}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.class}</StyledTableCell>
              <StyledTableCell align="center">{row.rollNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.birthDate}</StyledTableCell>
              <StyledTableCell align="center">{row.section}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" color="primary" onClick={() => handleEdit(row)}>
                 
                 <EditIcon/>
        
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
