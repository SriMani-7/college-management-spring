import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

export const DepartmentsTable = ({ depts }) => (
    <Table>
      <TableCaption>List of departments</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S.no</TableHead>
          <TableHead>Department name</TableHead>
          <TableHead>vision</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {depts.map((dept, index) => (
          <TableRow key={dept.id}>
            <TableCell>{index+1}</TableCell>
            <TableCell>
              <Link to={`${dept.id}`}>{dept.name}</Link>
            </TableCell>
            <TableCell>{dept.vision}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  