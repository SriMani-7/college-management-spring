import { Form } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { AdmissionForm } from "./form";
import { createStudent, fetchAvailableCourses } from "./services";
import { useEffect, useState } from "react";

export default function ApplicationFormPage() {
  const { control, ...rest } = useForm();

  const handleSubmit = async (data) => {
    console.log(data);
    console.log("before submit")
    try {
      const res = await createStudent(data);
      if(res.status == 200) {
        toast({
          title: "Done",
          description: "Student enrollment successfully!",
          label: "Notification",
          duration: 2000,
        });
      } else console.log(res);
    } catch(e) {
      console.error("in adding student", e);
    }
    
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        let res = await fetchAvailableCourses();
        let data = res.data;
        console.log(data)
        setCourses(data)
      } catch (e) {
        console.error("while getting the courses", e);
      }
    }

    getCourses();
  }, []); // get all courses

  return (
    <section className="container mx-auto space-y-2 pt-4">
      <h3 className=" text-lg">Student Enrollment form</h3>
      <Form control={control} {...rest}>
        <AdmissionForm
          control={control}
          onSubmit={rest.handleSubmit(handleSubmit)}
          courses={courses}
        />
      </Form>
      <Toaster />
    </section>
  );
}
