import { useState } from "react";
import { BaseLinkButton, PrimaryButton } from "../ui/buttons";
import { InputTextField } from "../ui/input";
import { PasswordToggle, ToggleButton } from "../ui/toggle";
import { useNavigate } from "react-router-dom";

const USER_TYPES = [
  { label: "Student", value: "STUDENT" },
  { label: "Faculty", value: "FACULTY" },
  { label: "Staff", value: "ADMIN" },
];

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [userType, setUserType] = useState("STUDENT");
  const navigate = useNavigate();

  const navigateForgetPassword = () => navigate("/forgetpassowrd")

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target)
    localStorage.setItem("userType", formData.get('userType'));

    // TODO: Implement login logic here i am approving authentication without validation fortesting.
    // let data = Object.fromEntries(formData.entries());

    navigate("/"+formData.get('userType').toLowerCase())
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Signin into</h3>
      <form method="post" className="flex flex-col w-8/12 lg:w-4/12" onSubmit={handleSubmit}>
      
        <fieldset className="grid grid-cols-3 gap-4">
          {USER_TYPES.map((ut) => (
            <ToggleButton
              name="userType"
              key={ut.value}
              value={ut.value}
              onChange={(event) => setUserType(event.target.value)}
              id={ut.value}
              isChecked={ut.value === userType}
            >
              <p className="text-gray-700">{ut.label}</p>
            </ToggleButton>
          ))}
        </fieldset>

        <InputTextField name="userName" type="text" label="User name" />
        <InputTextField
          name="password"
          type={passwordShown ? "password" : "text"}
          label="Password"
          trailingContent=<PasswordToggle
            show={passwordShown}
            onChange={setPasswordShown}
          />
        />
        <div className="h-8"></div>
        <PrimaryButton>
          <span>Login</span>
        </PrimaryButton>
        <div className="h-6"></div>
        <BaseLinkButton handleOnClick={navigateForgetPassword}>
          <span>Forget Password</span>
        </BaseLinkButton>
      </form>
    </div>
  );
}
