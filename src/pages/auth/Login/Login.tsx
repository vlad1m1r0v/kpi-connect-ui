import useAuth from "@/hooks/useAuth";
import { selectFeature, selectRole } from "@/redux/features/AuthSlice";
import { openSnackbar } from "@/redux/features/UISlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const Login = () => {
  const { login, isLoggedIn } = useAuth();

  const role = useAppSelector(selectRole);
  const feature = useAppSelector(selectFeature);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/${role}/${feature}`);
      dispatch(
        openSnackbar({
          variant: "success",
          message: "logged in successfully",
        })
      );
    }
  }, [isLoggedIn]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitHandler: SubmitHandler<LoginParams> = async (values) => {
    try {
      await login(values);
    } catch (error) {
      reset();
      dispatch(
        openSnackbar({ variant: "error", message: (error as Error).message })
      );
    }
  };

  return (
    <Paper elevation={3}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2} width={400} padding={2}>
          <TextField
            label="e-mail"
            variant="outlined"
            error={!!errors.username}
            helperText={errors.username?.message as string}
            {...register("username")}
          />
          <TextField
            label="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message as string}
            {...register("password")}
          />
          <Button variant="contained" type="submit" disabled={!isValid}>
            <Typography>Login</Typography>
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};
