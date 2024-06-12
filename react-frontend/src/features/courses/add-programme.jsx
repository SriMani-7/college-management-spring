import { SimpleFormField } from "@/components/formfield";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";

const DegreeSelectField = ({ control, degress }) => (
  <FormField
    control={control}
    name="degree"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Undergraduation degree</FormLabel>
        <FormControl>
          <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
            {degress.map((degree) => (
              <FormItem key={degree}>
                <FormControl>
                  <RadioGroupItem value={degree} />
                </FormControl>
                <FormLabel>{degree}</FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        </FormControl>
      </FormItem>
    )}
  />
);

/**
 * @component
 * @param {Object} props
 * @param {string[]} props.degrees
 * @param {string[]} props.departments
 * @returns {React.ReactElement}
 */
export function NewProgrammeDialogContent({
  degrees,
  departments,
  handleSubmit,
}) {
  const { control, ...rest } = useForm({
    defaultValues: {
      departments: []
    }
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Programme</DialogTitle>
        <DialogDescription>
          Add new Undergraduation programme under the specific degree
        </DialogDescription>
      </DialogHeader>
      <Form control={control} {...rest}>
        <form method="post" onSubmit={rest.handleSubmit(handleSubmit)}>
          <DegreeSelectField control={control} degress={degrees} />
          <SimpleFormField
            control={control}
            name="code"
            label="Programme code"
          />
          <SimpleFormField
            control={control}
            name="name"
            label="Programme name"
          />
          <FormField
            name="departments"
            control={control}
            render={() => (
              <FormItem>
                <div>
                  <FormLabel>Choose Core Departments</FormLabel>
                  <FormDescription>
                    You can choose upto 3 departments.
                  </FormDescription>
                </div>
                {departments.map((dept, index) => (
                  <FormField
                    key={index}
                    name="departments"
                    control={control}
                    render={({ field }) => (
                      <FormItem key={index}>
                        <FormControl>
                          <Checkbox
                            checked={field.value.find(de => de.id == dept.id) != undefined}
                            onCheckedChange={(checked) => {
                              const value = checked ? [...field.value, dept] : field.value.filter(val => val != dept)
                              field.onChange(value)
                              console.log(checked, field);
                            }}
                          />
                        </FormControl>
                        <FormLabel>{dept.name}</FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button>Close</Button>
            <Button>Submit</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
