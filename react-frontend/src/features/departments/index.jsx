import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DepartmentsTable } from "./list";
import { SimpleFormField } from "@/components/formfield";
import { createDepartment, fetchDepartments } from "./services";

export function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);
  const [newDeptDialog, setnewDeptDialog] = useState(false);
  const { control, handleSubmit, ...rest } = useForm();

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetchDepartments();
      if (res.status == 200) {
        setDepartments(res.data);
      }
    };

    getDepartments();
  }, []);

  const onNewCourse = async (data) => {
    try {
      let res = await createDepartment(data);
      if (res.status == 200) {
        departments.push(res.data);
        setDepartments(departments);
      }
    } catch (e) {
      console.e("in component", e);
    }
    setnewDeptDialog(false);
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
          <Form control={control} handleSubmit={handleSubmit} {...rest}>
            <form
              method="post"
              onSubmit={handleSubmit(onNewCourse)}
              className="flex gap-3 flex-col"
            >
              <SimpleFormField
                control={control}
                name="name"
                label="Department name"
              />
              <SimpleFormField
                control={control}
                name="vision"
                type="textarea"
                label="Department vision"
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
