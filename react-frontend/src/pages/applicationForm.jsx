import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
    <form onSubmit={onSubmit} method="post" className=" space-y-3" >
      <fieldset className="space-y-2">
        <legend className=" text-xl mb-3">Student details</legend>
        <div className="flex gap-3">
        <AdmiFormField name="firstName" label="First Name" />
        <AdmiFormField name="lastName" label="Last Name"/>
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
      <fieldset className="space-y-2">
        <legend className=" text-xl mb-3">Intermediate (10+2) details</legend>
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
      <fieldset className="space-y-2">
        <legend className=" text-xl mb-3">Course Preferences</legend>
        <AdmiFormField name="preference1" label="Course preference 1" />
        <AdmiFormField name="preference2" label="Course preference 2" />
        <AdmiFormField name="preference3" label="Course preference 3" />
      </fieldset>
      <Button>Submit</Button>
    </form>
  );
};

export default function ApplicationFormPage() {
  const { control, ...rest } = useForm();

  const onSubmit = (data) => {
    //TODO: Comming soon
    console.log(data)
  };

  return (
    <section className="container mx-auto space-y-3 pt-4">
      <h3 className=" text-3xl">Admission form</h3>
      <p className="">
        Submit the following form with the appropriate details of student. do
        not forget choose course preferences.
      </p>
      <Form control={control} {...rest}>
        <AdmissionForm
          control={control}
          handleSubmit={rest.handleSubmit(onSubmit)}
        />
      </Form>
    </section>
  );
}
