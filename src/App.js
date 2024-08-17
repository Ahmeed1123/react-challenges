import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ToDoList from "./compoents/pages/ToDoList";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "./contexts/TodosContext";
import { useState } from "react";
import MySnackBar from "./compoents/elements/snackBar/MySnackBar";
import { ToastProvider } from "./contexts/ToastContext";
import TodosProvider from "./contexts/TodosContext";
const theme = createTheme({
  typography : {
    fontFamily: [ 'Alexandria'],
  },
  palette: {
    primary: {
      main: "#ef6c00",
    },
    secondary: {
      main: "#ffeb3b",
    },
  }
});
const InitialTodos = [
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    description: "يسش يسش يسش يسش يسش",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    description: "يسش يسش يسش يسش يسش",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    description: "يسش يسش يسش يسش يسش",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "قراءة كتاب",
    description: "يسش يسش يسش يسش يسش",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState(InitialTodos);


  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>
        <ToastProvider>
          <div
            className="App"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              direction: "rtl",
              background: "#191b1f",
            }}
          >
            <ToDoList />
          </div>
        </ToastProvider>
      </TodosProvider>
    </ThemeProvider>
  );
}

export default App;
