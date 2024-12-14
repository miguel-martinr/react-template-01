import { useController } from "react-hook-form";

interface PasswordFieldProps {
  errorMessageClassName: string;
}

export const PasswordField = ({
  errorMessageClassName,
}: PasswordFieldProps) => {
  const {
    field,
    fieldState: { error: validationError },
  } = useController({
    name: "password",
    rules: { required: "Password is required" },
  });

  return (
    <label>
      Password
      <input type="password" {...field} />
      {!!validationError && (
        <span className={errorMessageClassName}>
          {validationError?.message || ""}
        </span>
      )}
    </label>
  );
};
