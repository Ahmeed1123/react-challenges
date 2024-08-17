import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

//  OTHERS
import { ToastContext, useToast } from "../../contexts/ToastContext";
import { useTodos , useTodosDispatch } from "../../contexts/TodosContext";
import { useState, useEffect, useMemo, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
// import todosReducer from "../../reducers/todosReducer";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Todo from "../elements/Todo";
import { type } from "@testing-library/user-event/dist/type";
export default function ToDoList() {
  const { showHideToast } = useToast();
  // const {showHideToast} = useContext(ToastContext);

  const [dialogTodo, setDialogTodo] = useState(null);
  const [showDeleteDailog, setShowDeleteDailog] = useState(false);

  const [showUpdateDailog, setShowUpdateDailog] = useState(false);

  const todos = useTodos();
  const dispatch = useTodosDispatch();
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType, setDisplayedTodosType] = useState("all");

  useEffect(() => {
    dispatch({ type: "get" });
  }, []);
  // handlers
  function openDeleteDailog(todo) {
    setDialogTodo(todo);
    setShowDeleteDailog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDailog(false);
  }
  function handleDeleteConfirm() {
    dispatch({
      type: "deleted",
      payload: dialogTodo,
    });
    setShowDeleteDailog(false);
    showHideToast("تم الحذف بنجاح");
  }

  // update handlers
  function openUpdateDailog(todo) {
    setDialogTodo(todo);
    setShowUpdateDailog(true);
  }
  function handleUpdateClose() {
    setShowUpdateDailog(false);
  }
  function handleUpdateConfirm() {
    dispatch({
      type: "updated",
      payload: dialogTodo,
    });

    setShowUpdateDailog(false);
    showHideToast("تم التعديل بنجاح");
  }
  // /handlers

  // fillteration array
  const complatedTodos = useMemo(() => {
    console.log("calling function todos");
    return todos.filter(
      (t) => {
        return t.isCompleted;
      },
      [todos]
    );
  });
  const notComplatedTodos = useMemo(() => {
    console.log("not calling function todos");
    return todos.filter((t) => {
      return !t.isCompleted;
    });
  }, [todos]);
  let todosToBeRendered = todos;
  if (displayedTodosType == "completed") {
    todosToBeRendered = complatedTodos;
  } else if (displayedTodosType == "non-completed") {
    todosToBeRendered = notComplatedTodos;
  } else {
    todosToBeRendered = todos;
  }
  function changeDisplayedType(e) {
    setDisplayedTodosType(e.target.value);
  }
  function handleAddClinck() {
    dispatch({
      type: "added",
      payload: {
        title: titleInput,
      },
    });
    setTitleInput("");
    showHideToast("تمت الإضافة بنجاح");
  }
  const todosJsx = todosToBeRendered.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        showDelete={openDeleteDailog}
        showUpdate={openUpdateDailog}
      />
    );
  });

  return (
    <>
      {/* UPDATE DIALOG */}
      <Dialog
        style={{ direction: "rtl" }}
        onClose={handleUpdateClose}
        open={showUpdateDailog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">تعديل مهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={dialogTodo?.title}
            onChange={(e) => {
              setDialogTodo({
                ...dialogTodo,
                title: e.target.value,
              });
            }}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="التفاصيل"
            fullWidth
            variant="standard"
            value={dialogTodo?.description}
            onChange={(e) => {
              setDialogTodo({
                ...dialogTodo,
                description: e.target.value,
              });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>إغلاق</Button>
          <Button autoFocus onClick={handleUpdateConfirm}>
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>
      {/* === UPDATE DIALOG */}
      {/* DELETE Dialog */}
      <Dialog
        style={{ direction: "rtl" }}
        open={showDeleteDailog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          هل أنت متأكد من حذف المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف بعد إتمامه
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>إغلاق</Button>
          <Button autoFocus onClick={handleDeleteConfirm}>
            نعم قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>
      {/* === DELETE Dialog === */}
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275, maxHeight: "80vh", overflowY: "auto" }}>
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
              <Grid sm={8}>
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
              <Grid sm={4}>
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
    </>
  );
}
