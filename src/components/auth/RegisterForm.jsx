import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import useAuthCalls from "../../hooks/useAuthCalls";

export const registerSchema = object({
  username: string()
    .min(5, "Kullanıcı adı 5 harften az olmamalıdır.")
    .max(20, "Kullanıcı adı 20 karakterden az olmalıdır.")
    .required("Kullanıcı adı zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karakterden az olmalıdır.")
    .required("İsim zorunludur"),
  lastName: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required("Soyisim zorunludur"),
  email: string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email zorunludur"),
  image: string(),
  bio: string()
    .min(10, "Bio en az 10 karakerden oluşmalıdır.")
    .max(200, "Bio en fazla 200 karakterden oluşmalıdır."),
  password: string()
    .required("Şifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Şifre bir sayı içermelidir")
    .matches(/[a-z]/, "Şifre bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre bir büyük harf içermelidir")
    .matches(/[!/[@$!%*?&,]+/, "Şifre bir özel karakter içermelidir"),
});

const RegisterForm = () => {
  const { register } = useAuthCalls();
  return (
    <Formik
      initialValues={{
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        image: "",
        city: "",
        bio: "",
        password: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        register(values);
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
              label="Username *"
              name="username"
              id="username"
              type="text"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={errors.username}
            />
            <TextField
              label="First Name *"
              name="firstName"
              id="firstName"
              type="text"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
            <TextField
              label="Last Name *"
              name="lastName"
              id="lastName"
              type="text"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
            <TextField
              label="Email *"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.image && Boolean(errors.image)}
              helperText={errors.image}
            />
            <TextField
              label="Bio"
              name="bio"
              id="bio"
              type="text"
              variant="outlined"
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.bio && Boolean(errors.bio)}
              helperText={errors.bio}
            />
            <TextField
              label="Password *"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "primary.main",
                "&:hover": { backgroundColor: "#023373" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
