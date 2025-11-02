import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { maskValue } from '../utils/maskValue';
import { maskDateInv } from '../utils/maskDateInv';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid #e0e0e0',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: 'nowrap'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //border: '1px solid #e0e0e0',
}));


const CustomizedTables = ({ data }) => {
  return (
    <TableContainer  >
      <Table stickyHeader sx={{ borderCollapse: "collapse" }} size="small" aria-label="customized table">
        <TableHead  >
          <TableRow >
            <StyledTableCell align="center" colSpan={3}>
              Empréstimo
            </StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>
              Parcela
            </StyledTableCell>
            <StyledTableCell align="center" colSpan={2}>
              Principal
            </StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>
              Juros
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="center">Data Competencia</StyledTableCell>
            <StyledTableCell align="center">Valor do Empréstimo</StyledTableCell>
            <StyledTableCell align="center">Saldo Devedor</StyledTableCell>
            <StyledTableCell align="center">Consolidada</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Amortização</StyledTableCell>
            <StyledTableCell align="center">Saldo</StyledTableCell>
            <StyledTableCell align="center">Provisão</StyledTableCell>
            <StyledTableCell align="center">Acumulado</StyledTableCell>
            <StyledTableCell align="center">Pago</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">
                {maskDateInv(row?.dateCompetence)}
              </StyledTableCell>
              <StyledTableCell align="center">{maskValue(index === 0 ? row?.loanAmount : 0) }</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.outstandingBalance || 0)}</StyledTableCell>
              <StyledTableCell align="center">{row?.installment?.number ? row?.installment?.number + "/120" : ""}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.installment?.total || 0)}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.principal?.amortization || 0)}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.principal?.balance || 0)}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.feel?.provision || 0)}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.feel?.accumulated || 0)}</StyledTableCell>
              <StyledTableCell align="center">{maskValue(row?.feel?.paid || 0)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
CustomizedTables.propTypes = {
    data: PropTypes.any
};

export default CustomizedTables;