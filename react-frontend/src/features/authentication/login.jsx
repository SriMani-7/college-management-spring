import { Link } from "react-router-dom";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SimpleFormField } from "@/components/formfield";

export const LoginForm = ({control, onSubmit}) => (
    <form
      method="post"
      onSubmit={onSubmit}
      className="flex flex-col w-8/12 lg:w-4/12 text-left gap-2"
    >
      <UserTypeField control={control} />
      <SimpleFormField
        control={control}
        name="userName"
        label="Username"
      />
      <SimpleFormField
        control={control}
        name="password"
        label="Password"
        type="password"
      />
      <Button size="lg" type="submit" className="mt-6">
        Login
      </Button>
      <Link
        to="/forgetpassowrd"
        className=" px-4 py-3 text-center bg-secondary text-secondary-foreground hover:bg-secondary/80"
      >
        Forget password?
      </Link>
    </form>
);

const USER_TYPES = [
  { label: "Student", value: "STUDENT" },
  { label: "Faculty", value: "FACULTY" },
  { label: "Staff", value: "ADMIN" },
];

function UserTypeField({ control }) {
  return (
    <FormField
      control={control}
      name="userType"
      render={({ field }) => (
        <FormItem className="mb-3">
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col"
            >
              {USER_TYPES.map((ut) => (
                <FormItem
                  className="flex flex-row gap-3 items-center py-1 justify-between"
                  key={ut.value}
                >
                  <FormLabel>{ut.label}</FormLabel>
                  <FormControl>
                    <RadioGroupItem value={ut.value} />
                  </FormControl>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
