import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/modules/auth/components/Input";
import styled from "@emotion/styled";
import { useLoginMutation } from "@/modules/auth/api";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/modules/auth/slice";

const schema = yup.object().shape({
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const StyledPaper = styled(Paper)`
  width: 400px;
  padding: 40px 20px 20px 20px;
  background-color: rgba(34, 34, 34, 0.7);
  display: flex;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledForgotButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async () => {
    const tokens = await login({ ...getValues() }).unwrap();
    dispatch(setCredentials({ ...tokens }));
    reset();
  };

  return (
    <StyledPaper>
      <div style={{ width: "100%" }}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail"
            variant="outlined"
            error={!!errors.username}
            helperText={errors.username?.message as string}
            {...register("username")}
          />
          <Input
            type="password"
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message as string}
            {...register("password")}
          />
          <StyledButton
            variant="contained"
            type="submit"
            disabled={!isValid || isLoading}
          >
            <Typography>Login</Typography>
          </StyledButton>
        </StyledForm>
        <StyledForgotButton>
          <Typography color="white" variant="subtitle2">
            Forgot password?
          </Typography>
        </StyledForgotButton>
      </div>
    </StyledPaper>
  );
}
