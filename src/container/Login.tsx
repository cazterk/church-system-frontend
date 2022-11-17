import { useCallback, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import AuthService from "src/services/auth.service";
import LoginForm from "src/components/forms/LoginForm";

const Login = () => {
  const initialValues = { userName: "", password: "" };
  const { mutate } = useMutation(AuthService.login);
  const handleSubmit = useCallback((values) => {
    mutate({ ...values });
  }, []);

  useEffect(() => {
    console.log("user :", AuthService.getCurrentUser());
  }, []);

  return (
    <>
      <LoginForm initialValues={initialValues} submit={handleSubmit} />
    </>
  );
};

export default Login;
