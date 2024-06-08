import CoursesList from "./CourseList";

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
  