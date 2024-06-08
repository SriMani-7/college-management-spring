import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const DepartmentsTable = ({ depts }) => (
    <Table>
      <TableCaption>List of departments</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S.no</TableHead>
          <TableHead>Department name</TableHead>
          <TableHead>HOD</TableHead>
          <TableHead>Faculty</TableHead>
          <TableHead>Staff</TableHead>
          <TableHead>Courses</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {depts.map((dept, index) => (
          <TableRow key={dept.id}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{dept.name}</TableCell>
            <TableCell>{dept.hod}</TableCell>
            <TableCell>{dept.faculty}</TableCell>
            <TableCell>{dept.staff}</TableCell>
            <TableCell>{dept.courses}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  