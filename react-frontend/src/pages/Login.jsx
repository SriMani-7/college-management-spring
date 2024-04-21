import { useState } from "react";
import { PrimaryButton } from "../ui/buttons";
import { InputTextField } from "../ui/input";
import { PasswordToggle, ToggleButton } from "../ui/toggle";

const USER_TYPES = [
  { label: "Student", value: "student" },
  { label: "Faculty", value: "faculty" },
  { label: "Staff", value: "staff" },
];

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [userType, setUserType] = useState("student");

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Signin into</h3>
      <form method="post" className="flex flex-col w-8/12 lg:w-4/12">
      
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
      </form>
    </div>
  );
}
