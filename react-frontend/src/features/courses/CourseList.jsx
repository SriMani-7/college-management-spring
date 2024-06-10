import { Button } from "@/components/ui/button";
/**
 * @typedef {Object} Course
 * @property {string} code
 * @property {string} name
 * @property {Programme[]} programmes
 */

/**
 * @typedef {Object} Programme
 * @property {string} code
 * @property {string} name
 * @property {string[]} coreDepartments
 */

/**
 * Represents a list of programes under the degree.
 *
 * @param {Object} props - The component props.
 * @param {Course} props.course
 */
function CoursesList({ course }) {
  return (
    <div className="flow justify-between shadow-md border rounded-md">
      <div className="p-3 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            {course.code} {course.name}
          </h3>
        </div>
        <div>
          <Button variant="secondary" size="sm">
            Add group
          </Button>
        </div>
      </div>
      <div className=" font-medium px-3 pb-2">Groups</div>
      <div className="flex flex-col mb-4">
        {course.programmes.map((programme, index) => (
          <ProgrammeItem programme={programme} key={index} />
        ))}
      </div>
    </div>
  );
}


/**
 * Programme componet for the CourseList
 *
 * @param {Object} props - The component props
 * @param {Programme} props.programme - Programme details
 */
const ProgrammeItem = ({ programme }) => (
  <div className="py-1 px-3 flex gap-3">
    <div>{programme.code}</div>
    <div>{programme.name}</div>
    <div>{programme.coreDepartments.join()}</div>
  </div>
);

export default CoursesList;
