import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Header from "../layout/Header";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Поле не должно быть пустым!"),
  lastName: Yup.string().required("Поле не должно быть пустым!"),
  email: Yup.string()
    .email("Не корректный адрес электронной почты")
    .required("Поле не должно быть пустым!"),
  password: Yup.string()
    .required("Поле не должно быть пустым!")
    .min(6, "Пароль должен состоять минимум из 6 символов!"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      handleButton();
      resetForm();
      navigate("/todoForm");
    },
  });

  const handleButton = () => {
    toast.success("Вы успешно зарегистрировались!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Header />
      <RegistForm>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTextField
            id="firstName"
            label="First Name"
            variant="outlined"
            {...formik.getFieldProps("firstName")}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <StyledTextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <StyledTextField
            id="email"
            label="Email"
            variant="outlined"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledTextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <StyledButton type="submit" variant="contained">
            Send
          </StyledButton>
        </StyledForm>
      </RegistForm>
    </>
  );
};

export default RegistrationForm;

const RegistForm = styled("main")({
  display: "flex",
  justifyContent: "center",
});

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  margin: "50px",
  paddingTop: "40px",
  width: "480px",
  borderRadius: "5px",
  maxHeight: "650px",
  backgroundColor: "white",
  boxShadow:
    "0.5px 2.3px 22.6px rgba(133, 132, 132, 0.247), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.247)",

  "& div": {
    margin: "8px",
  },

  "& button": {
    marginBottom: "40px",
    width: "442px",
    height: "54px",
    marginLeft: "18px",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: "8px",
});

const StyledButton = styled(Button)({
  marginBottom: "40px",
  width: "442px",
  height: "54px",
  marginLeft: "18px",
});
