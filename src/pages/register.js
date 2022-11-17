import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      // gender: "male",
      dateBirth: "",
      phone: "",
      permis: "",
      // policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      name: Yup.string().max(255).required("First name is required"),
      username: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      // gender: "",
      dateBirth: Yup.date(),
      phone: Yup.string().max(255),
      permis: Yup.string().max(255).required("Password is required"),
      // policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: () => {
      try {
        console.log(JSON.stringify(formik.values));
        fetch("http://localhost/driveWin/project_pfe/api/v1/register", {
          method: "POST",
          body: JSON.stringify(formik.values),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then(function (response) {
          response.json().then(function (resp) {
            console.log(resp);
          });
        });
      } catch (err) {
        console.log(err);
      }

      // Router.push("/").catch(console.error);
    },
  });

  return (
    <>
      <Head>
        <title>Register | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/" passHref>
            <Button component="a" startIcon={<ArrowBackIcon fontSize="small" />}>
              Dashboard
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              margin="normal"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.username && formik.errors.username)}
              fullWidth
              helperText={formik.touched.username && formik.errors.username}
              label="User Name"
              margin="normal"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.username}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email phone"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.dateBirth && formik.errors.dateBirth)}
              fullWidth
              helperText={formik.touched.dateBirth && formik.errors.dateBirth}
              label=""
              margin="normal"
              name="dateBirth"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="date"
              value={formik.values.dateBirth}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.touched.phone && formik.errors.phone}
              label="phone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="phone"
              value={formik.values.phone}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.permis && formik.errors.permis)}
              fullWidth
              helperText={formik.touched.permis && formik.errors.permis}
              label="permis"
              margin="normal"
              name="permis"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="permis"
              value={formik.values.permis}
              variant="outlined"
            />
            {/* <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )} */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
