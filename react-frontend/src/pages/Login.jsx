import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function LoginPage() {
  const navigate = useNavigate();
  const loginform = useForm();

  const handleSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userType", data.userType);

    // TODO: Implement login logic here i am approving authentication without validation fortesting.
    // let data = Object.fromEntries(formData.entries());

    navigate("/" + data.userType.toLowerCase());
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Signin into</h3>
      <Form {...loginform}>
        <form
          method="post"
          onSubmit={loginform.handleSubmit(handleSubmit)}
          className="flex flex-col w-8/12 lg:w-4/12 text-left gap-2"
        >
          <UserTypeField control={loginform.control} />
          <FormField
            control={loginform.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="jhon doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={loginform.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
              </FormItem>
            )}
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
      </Form>
    </div>
  );
}

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
