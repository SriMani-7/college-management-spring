import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { NewCourseDialog } from "./add-programme";
import { Button } from "@/components/ui/button";
import { createCourse, fetchCourses } from "./services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AcadamicsCoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      try {
        let res = await fetchCourses();
        let data = res.data;
        setCourses(data);
      } catch (e) {
        console.error("while getting the coourses", e);
        let dummy = [
          {
            name: "Introduction to JavaScript",
            description:
              "Learn the fundamentals of JavaScript programming language.",
          },
          {
            name: "Advanced Web Development",
            description:
              "Explore advanced topics in web development including frameworks and tools.",
          },
          {
            name: "Data Structures and Algorithms",
            description:
              "Study fundamental data structures and algorithms used in programming.",
          },
          {
            name: "Machine Learning Foundations",
            description:
              "An introduction to the basics of machine learning and its applications.",
          },
        ];
        setCourses(dummy);
      }
    }

    getCourses();
  }, []); // get all courses

  const [newCourse, setNewCourse] = useState(false);

  const handleNewProgramme = async (data) => {
    let postCourse = async () => {
      try {
        let res = await createCourse(data);
        console.log(res.data);
        courses.push(res.data);
        setCourses(courses);
      } catch (error) {
        console.error("While in cretiing the course", error);
      }
      setNewCourse(false);
    };
    postCourse(data);
  };

  return (
    <section>
      <Dialog open={newCourse} onOpenChange={setNewCourse}>
        <NewCourseDialog handleSubmit={handleNewProgramme} />
      </Dialog>
      <section>
        <div className="flex justify-between">
          <h3 className=" text-xl p-3">All Courses</h3>
          <Button
            variant="secondary"
            onClick={() => {
              setNewCourse(true);
            }}
          >
            New Course
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4 p-3 grow-0">
          {courses.map((course) => <Card key={course.id} className="">
              <CardHeader className="">
                <CardTitle className="text-lg">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{course.description}</p>
              </CardContent>
              <CardHeader>
              <Button variant="outline">View Course</Button>
              </CardHeader>
          </Card>)}
        </div>
      </section>
      
    </section>
  );
}
