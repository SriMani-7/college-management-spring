import { SimpleFormField } from "@/components/formfield";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export function NewCourseDialog({ handleSubmit }) {
  const { control, ...rest } = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Course</DialogTitle>
        <DialogDescription>
          Add new course to college by specifying the all details.
        </DialogDescription>
      </DialogHeader>
      <Form control={control} {...rest}>
        <form method="post" onSubmit={rest.handleSubmit(handleSubmit)}>
          <SimpleFormField control={control} name="name" label="Course name" />
          <SimpleFormField
            control={control}
            name="description"
            label="Course description"
          />
          <DialogFooter className="pt-3">
            <Button>Close</Button>
            <Button>Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
