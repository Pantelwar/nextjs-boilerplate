import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authSlice } from "slices/auth.slice";
import type { LoginRequest } from "types/auth";
import getErrorProps from "utils/getErrorProps";
import handleError from "utils/handleError";
import { wait } from "utils/wait";
import * as Yup from "yup";

export const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const formik = useFormik<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter email"),
      password: Yup.string()
        .required("Please enter password")
        .min(8, "Password must be minimum 8 characters"),
    }) as Yup.SchemaOf<LoginRequest>,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true);
      try {
        const response = await wait(1000, values);
        dispatch(authSlice.actions.login(response));
        toast.success("Logged in succesfully");
      } catch (error) {
        handleError(error);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validateOnMount: true,
  });

  return (
    <FormikProvider value={formik}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Paper sx={{ p: 3, minWidth: "min(100%, 350px)" }}>
          <Box component={Form}>
            <Stack gap={3}>
              <Typography variant="h4">{t("Login")}</Typography>
              <TextField
                {...formik.getFieldProps("email")}
                {...getErrorProps(formik, "email")}
                label="Email"
                type="email"
              />
              <TextField
                {...formik.getFieldProps("password")}
                {...getErrorProps(formik, "password")}
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {formik.isSubmitting ? <CircularProgress /> : "Login"}
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </FormikProvider>
  );
};
