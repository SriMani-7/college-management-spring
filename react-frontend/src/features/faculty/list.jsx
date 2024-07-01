import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";

export const FacultyListCard = ({ faculties, onNewFacultyClick }) => (
  <div>
    <h4>Faculty</h4>
    <Button onClick={onNewFacultyClick}>
      <PlusIcon  /> New Faculty
    </Button>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.No</TableHead>
          <TableHead>Email id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Mobile number</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Designation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {faculties.map((faculty, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{faculty.email}</TableCell>
            <TableCell>{faculty.name}</TableCell>
            <TableCell>{faculty.mobileNumber}</TableCell>
            <TableCell>{faculty.gender}</TableCell>
            <TableCell>{faculty.designation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);