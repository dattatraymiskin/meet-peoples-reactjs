import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUserAction } from "../../Redux/Auth/auth.action";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("INvalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "password must be at least characters")
    .required("Password is required"),
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialValues);

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("handle sumbit",values);
    dispatch(loginUserAction({data:values}));
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                varient="outlined"
                fullWidth
              ></Field>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              ></ErrorMessage>
            </div>

            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                varient="outlined"
                fullWidth
              ></Field>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              ></ErrorMessage>
            </div>
          </div>
          <Button
            sx={{ padding: ".8rem 0rem" }}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
