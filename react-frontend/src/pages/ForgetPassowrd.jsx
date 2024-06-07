import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgetPasswordPage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: implement restting password logic here
    navigate("/login");
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen flex-col text-center">
      <h3 className=" text-3xl mb-12">Reset password</h3>
      <form
        method="post"
        className="flex flex-col w-8/12 lg:w-4/12 text-start gap-3"
        onSubmit={handleSubmit}
      >
        <Label>Username</Label>
        <Input name="userName" type="text" />
        <Label>Date of Birth</Label>
        <Input name="dob" type="date" />
        <Label>New password</Label>
        <Input name="password" />
        <Label>Re-enter password</Label>
        <Input type="password" />
        
        <div className="h-8"></div>
        <Button>Submit</Button>
      </form>
    </div>
  );
}
