import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { EditIcon, Trash } from "lucide-react";

export const DegreeTableRow = ({ degree }) => (
  <>
    {degree.ugProgrammes.map((programme, index) => (
      <TableRow key={index+1}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{programme.code}</TableCell>
        <TableCell>{programme.name}</TableCell>
        <TableCell>
          {programme.coreDepartments.map((de) => de.name).join()}
        </TableCell>
        <TableCell className="flex">
          <Button size="icon" variant="ghost">
            <EditIcon />
          </Button>
          <Button size="icon" variant="ghost">
            <Trash />
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </>
);
