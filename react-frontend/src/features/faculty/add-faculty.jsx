import { SimpleFormField } from "@/components/formfield";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export const AddFacultyDialogContent = ({ handleNewFaculty }) => {
  const { control, ...rest } = useForm();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add new faculty</DialogTitle>
      </DialogHeader>
      <Form control={control} {...rest}>
        <form method="post" onSubmit={rest.handleSubmit(handleNewFaculty)}>
          <SimpleFormField
            control={control}
            name="email"
            label="Email address"
          />
          <SimpleFormField control={control} name="name" label="Faculty name" />
          <SimpleFormField
            control={control}
            name="mobileNumber"
            label="Mobile number"
            type="number"
          />
          <SimpleFormField control={control} name="gender" label="Gender" />
          <SimpleFormField
            control={control}
            name="designation"
            label="Designation"
          />
          <SimpleFormField control={control} name="address" label="Address"/>
          <DialogFooter>
            <Button>Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
