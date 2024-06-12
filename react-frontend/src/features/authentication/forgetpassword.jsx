import { Button } from "@/components/ui/button";
import { SimpleFormField } from "@/components/formfield";

export const ForgetPasswordForm = ({control, onSubmit}) => (
    <form
      method="post"
      onSubmit={onSubmit}
      className="flex flex-col w-8/12 lg:w-4/12 text-left gap-2"
    >
      <SimpleFormField
        control={control}
        name="userName"
        label="User name"
      />
      <SimpleFormField
        control={control}
        name="dob"
        label="Date of birth"
        type="date"
      />
      <SimpleFormField
        control={control}
        name="password"
        label="New Password"
      />
      <SimpleFormField
        control={control}
        name="rpassword"
        label="Re-type password"
      />
      <Button size="lg" type="submit" className="mt-6">
        Submit
      </Button>
    </form>
);
