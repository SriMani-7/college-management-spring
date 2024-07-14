import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { createFaculty, fetchFaculty } from "./services";
import { AddFacultyDialogContent } from "./add-faculty";
import { Dialog } from "@/components/ui/dialog";

export const FacultyListPage = () => {
  const [faculties, setFaculties] = useState([]);
  const [openFacultyDialog, setOpenFacultyDialog] = useState(false);

  useEffect(() => {
    async function getFaculty() {
      const res = await fetchFaculty();
      let data = res.data;
      setFaculties(data);
    }
    getFaculty();
  }, []);

  const handleNewFaculty = async (data) => {
    try {
      let res = await createFaculty(data);
      if (res.status == 200) {
        faculties.push(res.data);
        setFaculties(faculties);
      }
    } catch (error) {
      console.error("While in creating faculty", error);
    }
  };

  return (
    <>
      <Dialog open={openFacultyDialog} onOpenChange={setOpenFacultyDialog}>
        <AddFacultyDialogContent handleNewFaculty={handleNewFaculty} />
      </Dialog>
      <FacultyListCard
        faculties={faculties}
        onNewFacultyClick={() => setOpenFacultyDialog(true)}
      />
    </>
  );
};

export const FacultyListCard = ({ faculties, onNewFacultyClick }) => (
  <div>
    <h4>Faculty</h4>
    <Button onClick={onNewFacultyClick}>
      <PlusIcon /> New Faculty
    </Button>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>S.No</TableHead>
          <TableHead>Email id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Mobile number</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead>Designation</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {faculties.map((faculty, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{faculty.email}</TableCell>
            <TableCell>{faculty.name}</TableCell>
            <TableCell>{faculty.mobileNumber}</TableCell>
            <TableCell>{faculty.gender}</TableCell>
            <TableCell>{faculty.designation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
