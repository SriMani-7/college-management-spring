import Visibility from "../icons/Visibility";
import VisibilityOff from "../icons/VisibilityOff";

export function PasswordToggle({ show, onChange }) {
  return (
    <div onClick={() => onChange(!show)}>
      {show ? <Visibility /> : <VisibilityOff />}
    </div>
  );
}

export function ToggleButton({isChecked, name, id, value, onChange, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
      >
        {children}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="sr-only"
          onChange={onChange}
          defaultChecked={isChecked}
        />
      </label>
    </div>
  );
}
