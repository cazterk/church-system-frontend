import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthService from "src/services/auth.service";
import LoginForm from "src/components/forms/LoginForm";

const Login = () => {
  const initialValues = { userName: "", password: "" };
  const { mutate } = useMutation(AuthService.login);
  const handleSubmit = useCallback((values) => {
    mutate({ ...values });
  }, []);

 

  return (
    <>
      <LoginForm initialValues={initialValues} submit={handleSubmit} />
    </>
  );
};

export default Login;
