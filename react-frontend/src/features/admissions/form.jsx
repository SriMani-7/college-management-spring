import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const AdmissionForm = ({ control, onSubmit }) => {
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