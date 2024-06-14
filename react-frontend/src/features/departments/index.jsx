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
import {
  createDepartment,
  fetchDepartmentFaculty,
  fetchDepartments,
} from "./services";
import { useParams } from "react-router-dom";
import { FacultyListCard } from "../faculty/list";

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

export function DepartmentOverview() {
  const { did } = useParams();
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    let getFaculty = async () => {
      try {
        let res = await fetchDepartmentFaculty(did);
        let data = res.data;
        setFaculty(data);
      } catch (error) {
        console.error("While in getting faculty", error);
      }
    };

    getFaculty();
  }, [did]);

  return (
    <div>
      <h4>Department overview</h4>
      <FacultyListCard faculties={faculty} onNewFacultyClick={() => {}} />
    </div>
  );
}
