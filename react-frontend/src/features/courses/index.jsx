import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { NewProgrammeDialogContent } from "./add-programme";
import { Button } from "@/components/ui/button";
import { getDegrees, getDepartments } from "./services";

export default function AcadamicsCoursesPage() {
  const [departments] = useState(getDepartments());
  const [degrees] = useState(getDegrees());
  const [newProgramme, setNewProgramme] = useState(true);

  const handleNewProgramme = async (data) => {
    console.log(data)
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
      <div className="grid lg:grid-cols-2 gap-4">
        <Dialog open={newProgramme} onOpenChange={setNewProgramme}>
          <NewProgrammeDialogContent
            degrees={degrees}
            departments={departments}
            handleSubmit={handleNewProgramme}
          />
        </Dialog>
      </div>
    </section>
  );
}
