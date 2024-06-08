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
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DepartmentsTable } from "./list";
import { SimpleFormField } from "@/components/formfield";

export function DepartmentsPage() {
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
      <Button variant="ghost" onClick={() => setnewDeptDialog(true)}>
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
              <SimpleFormField
                control={control}
                name="name"
                label="Department name"
              />
              <SimpleFormField
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
