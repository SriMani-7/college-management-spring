import { TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

export const DegreeTableRow = ({ degree }) => (
  <>
    {degree.ugProgrammes.map((programme, index) => (
      <TableRow key={index + 1}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>
          <Link to={`${programme.code}`}>{programme.code}</Link>
        </TableCell>
        <TableCell>{programme.name}</TableCell>
        <TableCell>
          {programme.coreDepartments.map((de) => de.name).join()}
        </TableCell>
      </TableRow>
    ))}
  </>
);
