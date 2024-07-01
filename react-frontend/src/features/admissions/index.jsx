import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";

const AdmissionForm = ({ control, onSubmit }) => {
  const AdmiFormField = ({ name, label, type = "text" }) => (
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
  return (
    <form onSubmit={onSubmit} method="post" className=" space-y-3">
      <h4 className=" text-xl mb-4 font-medium">Student details</h4>
      <hr />
      <fieldset>
        <div className="flex gap-3">
          <AdmiFormField name="firstName" label="First Name" />
          <AdmiFormField name="lastName" label="Last Name" />
        </div>
        <div className="flex gap-3">
          <AdmiFormField name="mobile" label="Mobile Number" />
          <AdmiFormField name="email" label="Email Address" />
        </div>
        <AdmiFormField name="region" label="Region" />
        <AdmiFormField name="address" label="Address" />
        <AdmiFormField name="city" label="City" />
        <div className="flex gap-3">
          <AdmiFormField name="state" label="state" />
          <AdmiFormField name="pincode" label="Pincode" />
        </div>
      </fieldset>
      <h4 className=" text-xl mb-4 font-medium">Education details</h4>
      <hr />
      <fieldset>
        <div className="flex gap-3">
          <AdmiFormField name="xiiHallticket" label="Holl ticket number" />
          <AdmiFormField name="xiiMarks" label="Marks" />
        </div>
        <AdmiFormField name="xiiCollege" label="College Name" />
        <AdmiFormField name="xiiCollegeLocation" label="Location" />
        <AdmiFormField name="xiiCourse" label="Course" />
        <div className="flex gap-3">
          <AdmiFormField name="xiiType" label="Course completion type" />
          <AdmiFormField name="xiiYear" label="Passout year" />
        </div>
      </fieldset>
      <h4 className=" text-xl mb-4 font-medium">Course details</h4>
      <fieldset>
        <AdmiFormField name="degree" label="Degree type" />
        <AdmiFormField name="programmeCode" label="Programme" />
        <AdmiFormField name="acadamicYear" label="Acadamic Year" />
        <AdmiFormField name="admissionNumber" label="Admission number" />
      </fieldset>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default function ApplicationFormPage() {
  const { control, ...rest } = useForm();

  const onSubmit = (data) => {
    //TODO: Comming soon
    console.log(data);
    toast({
      title: "Done",
      description: "Student enrollment successfully!",
      label: "Notification",
      duration: 2000,
    });
  };

  return (
    <section className="container mx-auto space-y-2 pt-4">
      <h3 className=" text-lg">Student Enrollment form</h3>
      <Form control={control} {...rest}>
        <AdmissionForm
          control={control}
          onSubmit={rest.handleSubmit(onSubmit)}
        />
      </Form>
      <Toaster />
    </section>
  );
}
