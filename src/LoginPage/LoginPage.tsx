import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { useLogin } from "../hooks/useLogin";
import styles from "./LoginPage.module.scss";
import { useLoginContext } from "../context/LoginContext";
import { LoginHeader } from "./LoginHeader/LoginHeader";
import { sleep } from "../common/sleep";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const {
    login,
    error: loginError,
    loading: isLoading,
    setError: setLoginError,
  } = useLogin();
  const { token, setToken, setUserId } = useLoginContext();

  const formMethods = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;
    const { token, userId } = await login({
      email,
      password,
    });

    setToken(token);
    await sleep({ factorMs: 1.5 });
    setUserId(userId);
  };

  const iconColor = token ? "green" : !!loginError ? "red" : "#123abc";
  const iconIsLoading = isLoading === null ? null : isLoading || !!token;

  return (
    <div className={styles.container}>
      <LoginHeader isLoading={iconIsLoading} iconColor={iconColor} />
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleLogin)} noValidate>
          <EmailField
            errorMessageClassName={styles.errorMessage}
            loginError={loginError}
            onChange={() => setLoginError(null)}
          />
          <PasswordField errorMessageClassName={styles.errorMessage} />
          <button type="submit">Login</button>
        </form>
      </FormProvider>
    </div>
  );
};
