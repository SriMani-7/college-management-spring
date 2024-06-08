import { useNavigate } from "react-router-dom";
import { LoginForm } from "./login";
import { useForm } from "react-hook-form";
import { ForgetPasswordForm } from "./forgetpassword";
import { Form } from "@/components/ui/form";

export function LoginPage() {
  const navigate = useNavigate();
  const { control, ...rest } = useForm();

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
      <Form control={control} {...rest}>
        <LoginForm
          control={control}
          onSubmit={rest.handleSubmit(handleSubmit)}
        />
      </Form>
    </div>
  );
}

export function ForgetPasswordPage() {
  const navigate = useNavigate();
  const { control, ...rest } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: implement restting password logic here
    navigate("/login");
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Reset password</h3>
      <Form control={control} {...rest}>
        <ForgetPasswordForm
          control={control}
          onSubmit={rest.handleSubmit(handleSubmit)}
        />
      </Form>
    </div>
  );
}
