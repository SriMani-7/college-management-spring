import { Form } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { AdmissionForm } from "./form";
import { createStudent } from "./services";

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
