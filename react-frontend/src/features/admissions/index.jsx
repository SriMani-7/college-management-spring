import { Form } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { AdmissionForm } from "./form";
import { createStudent } from "./services";
import { useEffect, useState } from "react";
import { fetchProgrammes } from "../courses/services";

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

  const [programmes, setProgrammes] = useState([]);

  useEffect(() => {
    async function getProgrammes() {
      try {
        let res = await fetchProgrammes();
        let data = res.data;
        console.log(data);
        const programmes2 = [];
        data.forEach(de => de.ugProgrammes.forEach(pro => programmes2.push({
          name: pro.name,
          code: pro.code
        })))
        setProgrammes(programmes2)
      } catch (e) {
        console.error("while getting the programmes", e);
      }
    }

    getProgrammes();
  }, []); // get all programmes

  return (
    <section className="container mx-auto space-y-2 pt-4">
      <h3 className=" text-lg">Student Enrollment form</h3>
      <Form control={control} {...rest}>
        <AdmissionForm
          control={control}
          onSubmit={rest.handleSubmit(handleSubmit)}
          programmes={programmes}
        />
      </Form>
      <Toaster />
    </section>
  );
}
