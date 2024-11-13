import { object, string } from "yup";
import { Form, Formik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import useAuthCalls from "../../hooks/useAuthCalls";

const LoginForm = () => {
  const { login } = useAuthCalls();

  const loginSchema = object({
    password: string()
      .required("Şifre zorunludur.")
      .min(8, "Şifre en az 8 karakter içermelidir.")
      .max(16, "Şifre en fazla 16 karakter olabilir.")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir")
      .matches(
        /[@$!%*?&,]+/,
        "Şifre en az bir özel karakter (@$!%*?&.,) içermelidir"
      ),
    email: string()
      .email("Lütfen geçerli bir email giriniz.")
      .required("Email zorunludur."),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        login(values);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({
        isSubmitting,
        handleChange,
        values,
        touched,
        errors,
        handleBlur,
      }) => (
        <Form>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{ backgroundColor: "primary.main" }}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
