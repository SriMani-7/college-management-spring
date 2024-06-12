import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { NewProgrammeDialogContent } from "./add-programme";
import { Button } from "@/components/ui/button";
import { createProgramme, fetchAvailableDepts, fetchProgrammes } from "./services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DegreeTableRow } from "./CourseList";

export default function AcadamicsCoursesPage() {
  const [departments, setDepartments] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [programmes, setProgrammes] = useState([]);

  useEffect(() => {
    async function getProgrammes() {
      try {
        let res = await fetchProgrammes();
        let data = res.data;
        setProgrammes(res.data);
        setDegrees(data.map((pro) => pro.code));
      } catch (e) {
        console.error("while getting the programmes", e);
      }
    }

    getProgrammes();
  }, []); // get all programmes

  useEffect(() => {
    let getDepartments = async () => {
      try {
        let res = await fetchAvailableDepts();
        if(res.status == 200) {
          setDepartments(res.data);
        }
      } catch(e) {
        console.error("while loading available departments", e);
      } 
    }

    getDepartments();
  },[]); // get all available departments

  const [newProgramme, setNewProgramme] = useState(false);

  const handleNewProgramme = async (data) => {
    let postProgramme = async () => {
      try {
        let res = await createProgramme(data);
        console.log(res.data);    
        let data2 = res.data;
        let degree = programmes.find(deg => deg.code == data2.degree);
        degree.ugProgrammes.push({
          code: data2.code,
          name: data2.name,
          coreDepartments: data2.departments
        })
        setProgrammes(programmes);
        
      } catch (error) {
        console.error("While in cretiing the department", error)
      }
    }
    
    postProgramme(data);
  };

  return (
    <section>
      <Button
        variant="secondary"
        onClick={() => {
          setNewProgramme(true);
        }}
      >
        New Programm
      </Button>
      <Dialog open={newProgramme} onOpenChange={setNewProgramme}>
        <NewProgrammeDialogContent
          degrees={degrees}
          departments={departments}
          handleSubmit={handleNewProgramme}
        />
      </Dialog>
      <Table className=" mt-4">
        <TableHeader className=" bg-zinc-200">
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead>Programme code</TableHead>
            <TableHead>Programme name</TableHead>
            <TableHead>Departments</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programmes.map((degree) => (
            <>
              <TableRow>
                <TableCell colspan="5" className=" text-md font-semibold">
                  {degree.code} {degree.name}
                </TableCell>
              </TableRow>
              <DegreeTableRow degree={degree} key={degree.code} />
            </>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
