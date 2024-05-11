import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useForm } from "react-hook-form";

const DepartmentsTable = ({ depts }) => (
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
const AdmiFormField = ({ control, name, label, type = "text" }) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className=" font-normal">{label}</FormLabel>
        <FormControl>
          <Input type={type} {...field} />
        </FormControl>
      </FormItem>
    )}
  />
);

export function PrincipalDeptsPage() {
  const [departments, setDepartments] = useState([]);
  const [newDeptDialog, setnewDeptDialog] = useState(false);
  const { control, ...rest } = useForm();

  const onNewCourse = (data) => {
    departments.push(data);
    setDepartments(departments);
	setnewDeptDialog(false)
  };

  return (
    <>
      <Button variant="ghost" onClick={(e) => setnewDeptDialog(true)}>
        New department
      </Button>
      <DepartmentsTable depts={departments} />
      <Dialog open={newDeptDialog} onOpenChange={setnewDeptDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Department</DialogTitle>
            <DialogDescription>
              Add department to the college, This functionality completed after
              faculty and staff joined to department.
            </DialogDescription>
          </DialogHeader>
          <Form control={control} {...rest}>
            <form method="post" onSubmit={rest.handleSubmit(onNewCourse)} className="flex gap-3 flex-col">
              <AdmiFormField
                control={control}
                name="name"
                label="Department name"
              />
              <AdmiFormField
                control={control}
                name="hod"
                label="Head of the department"
              />
              <DialogFooter>
                <Button>Close</Button>
                <Button>Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
