import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../ui/buttons";
import { InputTextField, PasswordTextField } from "../ui/input";

export default function ForgetPasswordPage() {
const navigate = useNavigate()
const handleSubmit = (event) => {
	event.preventDefault();

	// TODO: implement restting password logic here
	navigate("/login")
}

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Reset password</h3>
      <form method="post" className="flex flex-col w-8/12 lg:w-4/12" onSubmit={handleSubmit}>
        <InputTextField name="userName" type="text" label="User name" />
        <InputTextField name="dob" type="date" label="Date of birth" />
        <PasswordTextField name="password" label="New Passoword" />
        <PasswordTextField name="confirmPassword" label="Re-enter Password" />
        <div className="h-8"></div>
        <PrimaryButton>
          <span>Submit</span>
        </PrimaryButton>
      </form>
    </div>
  );
}
