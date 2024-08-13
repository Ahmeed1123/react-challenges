import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//  OTHERS
import { TodosContext } from "../../contexts/TodosContext";
import { useContext,useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


import {
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Todo from "../elements/Todo";

export default function ToDoList() {
  const {todos, setTodos} = useContext(TodosContext);
  const [titleInput,setTitleInput] = useState("");
  const [displayedTodosType,setDisplayedTodosType]  = useState("all");
  useEffect(() => {
    console.log("calling use effect");
      const storgeTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
      setTodos(storgeTodos);
  }, []);
  // fillteration array 
    const complatedTodos = todos.filter((t) => {
      return t.isCompleted;
    });
    const notComplatedTodos = todos.filter((t) => {
      return !t.isCompleted;
    });
    let todosToBeRendered = todos;
    if(displayedTodosType == "completed") {
      todosToBeRendered = complatedTodos;
    } else if(displayedTodosType == "non-completed") {
      todosToBeRendered = notComplatedTodos;

    } else {
      todosToBeRendered = todos;
    }
    function changeDisplayedType(e) {
      setDisplayedTodosType(e.target.value);
    }
    function handleAddClinck() {
      const newTodos = {
        id: uuidv4(),
        title: titleInput,
        description: "",
        isCompleted: false,
      }
      if(titleInput === "") {
        alert("العنوان لا يمكن أن يكون فارغا");
        return;
      }
      const updatedTodos = [...todos, newTodos];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTitleInput("");
    }
  const todosJsx = todosToBeRendered.map((t) => {
    return (
      <Todo key={t.id} todo={t} />
    );
  });

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, maxHeight: "80vh", overflowY:"auto" }}>
        <CardContent>
          <Typography variant="h2">مهامي</Typography>
          <Divider style={{ marginBottom: "10px" }} />

          {/* filter Buttons */}
          <ToggleButtonGroup
            color="primary"
            value={displayedTodosType}
            exclusive
            onChange={changeDisplayedType}
            aria-label="Platform"
            style={{ direction: "ltr" }}
            color="primary"
          >
            <ToggleButton value="non-completed">غير المنجز</ToggleButton>
            <ToggleButton value="completed">المنجز</ToggleButton>
            <ToggleButton value="all">الكل</ToggleButton>
          </ToggleButtonGroup>
          {/* === filter Buttons === */}
          {/* All ToDos */}
          {todosJsx}
          {/* === all ToDos === */}
          {/* input + button */}
          <Grid
            container
            style={{ marginTop: "30px", maxWidth: "100%" }}
            spacing={6}
          >
            <Grid xs={8}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
            <Grid xs={4}>
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  handleAddClinck();
                }}
                disabled={titleInput.length == 0}
              >
                إضافة
              </Button>
            </Grid>
          </Grid>
          {/* === input + button === */}
        </CardContent>
      </Card>
    </Container>
  );
}
