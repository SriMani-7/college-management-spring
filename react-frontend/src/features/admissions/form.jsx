import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CourseSelectFIeld = ({ control, courses }) => (
    <FormField
      control={control}
      name="course"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Courses</FormLabel>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
              {courses.map((pro) => (
                <FormItem key={pro.id}>
                  <FormControl>
                    <RadioGroupItem value={pro.id} />
                  </FormControl>
                  <FormLabel>{pro.code} {pro.name}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );

export const AdmissionForm = ({ control, courses, onSubmit }) => {
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
        <AdmiFormField name="address" label="Address" />
        <AdmiFormField name="city" label="City" />
        <div className="flex gap-3">
          <AdmiFormField name="state" label="state" />
          <AdmiFormField name="pincode" label="Pincode" />
        </div>
      </fieldset>
      <h4 className=" text-xl mb-4 font-medium">Course details</h4>
      <fieldset>
        <CourseSelectFIeld control={control} courses={courses}/>
        <AdmiFormField name="admissionNumber" label="Admission number" />
      </fieldset>
      <Button type="submit">Submit</Button>
    </form>
  );
};
