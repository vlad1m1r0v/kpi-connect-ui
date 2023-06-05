import { useLazyChangePasswordQuery } from "@/redux/api/usersApi";
import { openSnackbar } from "@/redux/features/UISlice";
import { useAppDispatch } from "@/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup
    .string()
    .min(8, "New password must be at least 8 characters")
    .required("New password is required"),
  confirmNewPassword: yup
    .string()
    .required("Confirm new password is required")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

const ChangePassword = () => {
  const dispatch = useAppDispatch();

  const [triggerChangePasswordQuery] = useLazyChangePasswordQuery();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<ChangePasswordParams>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitHandler: SubmitHandler<ChangePasswordParams> = async (
    values
  ) => {
    const response = await triggerChangePasswordQuery(values, false);
    if (response.error) {
      dispatch(
        openSnackbar({
          variant: "error",
          message: (response.error as { data: ErrorResponse }).data
            .error_description,
        })
      );
    } else {
      dispatch(
        openSnackbar({
          variant: "success",
          message: "Password changed successfully",
        })
      );
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Stack spacing={2}>
          <TextField
            label="Old password"
            variant="outlined"
            size="small"
            error={!!errors.oldPassword}
            helperText={errors.oldPassword?.message as string}
            {...register("oldPassword")}
          />
          <TextField
            label="New password"
            variant="outlined"
            size="small"
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message as string}
            {...register("newPassword")}
          />
          <TextField
            label="Confirm password repeat"
            variant="outlined"
            size="small"
            error={!!errors.confirmNewPassword}
            helperText={errors.confirmNewPassword?.message as string}
            {...register("confirmNewPassword")}
          />
          <Button
            variant="contained"
            sx={{ width: "fit-content" }}
            color="success"
            disabled={!isValid}
            type="submit"
          >
            <Typography sx={{ textTransform: "none" }}>
              Change password
            </Typography>
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default ChangePassword;
