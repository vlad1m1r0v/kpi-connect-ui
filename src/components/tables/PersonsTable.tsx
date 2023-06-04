import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SelectAction from "../SelectAction/SelectAction";

interface Props {
  persons: Person[];
}

const PersonsTable: React.FC<Props> = ({ persons }) => {
  return (
    <TableContainer component={Paper} square={true}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Full name</TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Outside</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => (
            <TableRow
              key={person.fullName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {person.fullName}
              </TableCell>
              <TableCell align="center">{person.role}</TableCell>
              <TableCell align="center">{String(person.outside)}</TableCell>
              <TableCell align="center">
                <SelectAction />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonsTable;
