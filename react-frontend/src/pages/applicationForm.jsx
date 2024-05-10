import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AdmissionForm = ({ control, onSubmit, onNextTab }) => {
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
      <TabsContent value="basic">
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
          <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              className=" px-8 mt-3"
              onClick={(e) => onNextTab("education")}
            >
              Next
            </Button>
          </div>
        </fieldset>
      </TabsContent>
      <TabsContent value="education">
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
          <div className="flex justify-end">
            <Button
              type="button"
              variant="secondary"
              className=" px-8 mt-3"
              onClick={(e) => onNextTab("preferences")}
            >
              Next
            </Button>
          </div>
        </fieldset>
      </TabsContent>
      <TabsContent value="preferences">
        <fieldset>
          <AdmiFormField name="preference1" label="Course preference 1" />
          <AdmiFormField name="preference2" label="Course preference 2" />
          <AdmiFormField name="preference3" label="Course preference 3" />
          <Button type="submit">Submit</Button>
        </fieldset>
      </TabsContent>
    </form>
  );
};

const ApplicationDialogContent = () => (
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Applied Sucessfully</AlertDialogTitle>
      <AlertDialogDescription>
        Your application form has been submitted Sucessfully.
        <p>
          You can track application with this application number and registered
          email address
        </p>
        <p className="font-semibold py-2">XXXXXXXXXXXX</p>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Home</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
);

export default function ApplicationFormPage() {
  const { control, ...rest } = useForm();
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState("basic");

  const onSubmit = (data) => {
    //TODO: Comming soon
    console.log(data);
    setOpen(true);
  };

  return (
    <section className="container mx-auto space-y-3 pt-4">
      <h3 className=" text-3xl">Admission form</h3>
      <p className="pb-3">
        Submit the following form with the appropriate details of student. do
        not forget choose course preferences.
      </p>

      <Tabs
        className="flex gap-4"
        orientation="vertical"
        value={tabValue}
        onValueChange={setTabValue}
      >
        <TabsList className="flex flex-col h-min p-2 gap-3">
          <TabsTrigger value="basic">Student Details</TabsTrigger>
          <TabsTrigger value="education">Education details</TabsTrigger>
          <TabsTrigger value="preferences">Course Preferences</TabsTrigger>
        </TabsList>
        <Form control={control} {...rest}>
          <Form control={control} {...rest}>
            <AdmissionForm
              control={control}
              onSubmit={rest.handleSubmit(onSubmit)}
              onNextTab={setTabValue}
            />
          </Form>
        </Form>
      </Tabs>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <ApplicationDialogContent />
      </AlertDialog>
    </section>
  );
}
