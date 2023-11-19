import React, { useState, useEffect } from "react";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Header from "../layout/Header";

const TodoApp = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const formik = useFormik({
    initialValues: {
      newTask: "",
    },
    validate: (values) => {
      const errors = {};
      if (values.newTask.trim() === "") {
        errors.newTask = "Заполните поле!";
        handleButton();
      }
      return errors;
    },
    onSubmit: (values) => {
      if (editingIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = values.newTask;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks((prevTasks) => [...prevTasks, values.newTask]);
      }
      formik.resetForm();
    },
  });

  const editTask = (index) => {
    formik.setValues({ newTask: tasks[index] });
    setEditingIndex(index);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleButton = () => {
    toast.error("Заполните поле!", {
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
      <StyledContainer>
        <StyledHeading>Todo App</StyledHeading>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledTextField
            label="New Task"
            variant="outlined"
            fullWidth
            name="newTask"
            value={formik.values.newTask}
            onChange={formik.handleChange}
            error={formik.touched.newTask && Boolean(formik.errors.newTask)}
            helperText={formik.touched.newTask && formik.errors.newTask}
          />
          <StyledButton type="submit" variant="contained" color="primary">
            Add
          </StyledButton>
        </StyledForm>
        <StyledList>
          {tasks.map((task, index) => (
            <StyledListItem key={index}>
              <StyledListItemText primary={task} />
              <StyledListButton
                variant="outlined"
                color="secondary"
                onClick={() => removeTask(index)}
              >
                Remove
              </StyledListButton>
              <StyledListButton
                variant="outlined"
                color="primary"
                onClick={() => editTask(index)}
              >
                Edit
              </StyledListButton>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledContainer>
    </>
  );
};

export default TodoApp;

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledHeading = styled("h1")({
  marginBottom: "40px",
  marginTop: "40px",
  textAlign: "center",
  fontSize: "50px",
});

const StyledForm = styled("form")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "40rem",
  minHeight: "120px",
  maxHeight: "650px",
});

const StyledList = styled(List)({
  width: "690px",
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  border: "1px solid #bdb9b9",
  borderRadius: "4px",
  margin: "20px 0 0 0",
});

const StyledListItemText = styled(ListItemText)({
  "& span": {
    maxWidth: "380px",
    overflow: "hidden",
  },
});

const StyledTextField = styled(TextField)({
  "& input": {
    boxShadow:
      "0.5px 2.3px 22.6px rgba(237, 237, 237, 0.202), 1.3px 6.3px 62.6px rgba(174, 174, 174, 0.247)",
  },
});

const StyledButton = styled(Button)({
  width: "90px",
  height: "53px",
  backgroundColor: "orange",
  marginLeft: "15px",
  "&:hover": {
    backgroundColor: "black",
  },
});

const StyledListButton = styled(Button)({
  width: "80px",
  height: "43px",
  backgroundColor: "orange",
  marginLeft: "15px",
  "&:hover": {
    backgroundColor: "black",
  },
});
