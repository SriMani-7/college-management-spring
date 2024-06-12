import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { NewProgrammeDialogContent } from "./add-programme";
import { Button } from "@/components/ui/button";
import { fetchProgrammes } from "./services";
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
  const [departments] = useState([]);
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
  }, []);

  const [newProgramme, setNewProgramme] = useState(false);

  const handleNewProgramme = async (data) => {
    console.log(data);
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
