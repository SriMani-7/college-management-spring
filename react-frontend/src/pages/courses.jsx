import { Button } from "@/components/ui/button";

const CoursesList = ({ course }) => (
  <div className="flow justify-between shadow-md border rounded-md">
    <div className="p-3 flex justify-between">
      <div>
        <h3 className="text-lg font-semibold leading-none tracking-tight">
          {course.name}
        </h3>
        <p className="text-sm text-muted-foreground">{course.description}</p>
      </div>
      <div>
        <Button variant="secondary" size="sm">
          Add group
        </Button>
      </div>
    </div>
    <div className=" font-medium px-3 pb-2">Groups</div>
    <div className="flex flex-col mb-4">
      {course.groups.map((group, index) => (
        <div key={index} className="py-1 px-3 flex gap-3">
          <div>{group.code}</div>
          <div>{group.subjects.join()}</div>
        </div>
      ))}
    </div>
  </div>
);

const courses = [
  {
    name: "Bachelor of Science (B.Sc)",
    description: "Undergraduate courses in Science stream",
    groups: [
      {
        code: "MPE",
        subjects: ["Mathematics", "Physics", "Electronics"],
      },
      {
        code: "MECs",
        subjects: ["Mathematics", "Electronics", "Computer Science"],
      },
      {
        code: "MPE",
        subjects: ["Mathematics", "Physics", "Electronics"],
      },
      {
        code: "MECs",
        subjects: ["Mathematics", "Electronics", "Computer Science"],
      },
    ],
  },
  {
    name: "Bachelor of Arts (B.A)",
    description: "Undergraduate courses in arts stream",
    groups: [
      {
        code: "EHP",
        subjects: ["Economics", "History", "Political Science"],
      },
      {
        code: "Journalism",
        subjects: ["Journalism", "History", "Public Administration"],
      },
    ],
  },
  {
    name: "Bachelor of Arts (B.A)",
    description: "Undergraduate courses in arts stream",
    groups: [
      {
        code: "EHP",
        subjects: ["Economics", "History", "Political Science"],
      },
      {
        code: "Journalism",
        subjects: ["Journalism", "History", "Public Administration"],
      },
    ],
  },
];

export default function AcadamicsCoursesPage() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {courses.map((course) => (
        <CoursesList key={course.name} course={course} />
      ))}
    </div>
  );
}
