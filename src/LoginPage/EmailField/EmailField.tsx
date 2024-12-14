import { useController } from "react-hook-form";

interface EmailFieldProps {
  loginError: string | null;
  errorMessageClassName: string;
  onChange?: (value: string) => void;
}

export const EmailField = ({
  loginError,
  errorMessageClassName,
  onChange,
}: EmailFieldProps) => {
  const {
    field,
    fieldState: { error: validationError },
  } = useController({
    name: "email",
    rules: {
      required: "Email is required",
      pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
    },
  });

  const shouldShowError = !!loginError || !!validationError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    onChange?.(event.target.value);
  };

  return (
    <label>
      Email
      <input type="email" {...field} onChange={handleChange} />
      {shouldShowError && (
        <span className={errorMessageClassName}>
          {loginError || validationError?.message || ""}
        </span>
      )}
    </label>
  );
};
