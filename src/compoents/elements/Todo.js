import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useContext , useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import Modal from '@mui/material/Modal';

export default function Todo({ todo }) {

  const [showDeleteDailog, setShowDeleteDailog] = useState(false);
  const [showUpdateDailog, setShowUpdateDailog] = useState(false);
  const { todos , setTodos } = useContext(TodosContext);
  const [uodateTodo, setUpdateTodo] = useState({title: todo.title, description: todo.description});
  // event handlers
  function handleCheckClick() {
    const updatedTodos = todos.map((t) => {
      if(t.id == todo.id) {

        t.isCompleted =  !t.isCompleted ;
      } 
      return t;
    })
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

  } 
  function handleDeleteClick() {
    setShowDeleteDailog(true);
  }
  function handleDeleteDialogClose() {
    setShowDeleteDailog(false);
  }
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id != todo.id;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

  }
  function handleupdateConfirm() {
    const updatedTodos = todos.map((t) => {
      if(t.id == todo.id) {
        return {...t, title : uodateTodo.title , description : uodateTodo.description};
      } else {
        return t;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    setShowUpdateDailog(false);
  }
  function handleUpdateClose() {
    setShowUpdateDailog(false);
  }
  function handleUpdateClick() {
    setShowUpdateDailog(true);
  }
  

  // event handlers
  return (
    <>
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
         {/* uodate Dialog */}
         <Dialog
          style={{ direction: "rtl" }}
          onClose={handleUpdateClose}
          open={showUpdateDailog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            تعديل مهمة
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                label="عنوان المهمة"
                fullWidth
                variant="standard"
                value={uodateTodo.title}
                onChange={(e) => {
                  setUpdateTodo({...uodateTodo , title: e.target.value});
                }}
              />
               <TextField
                autoFocus
                margin="dense"
                id="name"
                label="التفاصيل"
                fullWidth
                variant="standard"
                value={uodateTodo.description}
                onChange={(e) => {
                  setUpdateTodo({...uodateTodo , description: e.target.value});
                }}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleUpdateClose}>إغلاق</Button>
            <Button autoFocus onClick={handleupdateConfirm}>
              تأكيد
            </Button>
          </DialogActions>
        </Dialog>
      {/* === uodate Dialog === */}
      <Card
       className="todoCard"
        sx={{
          minWidth: 275,
          background: "#283593",
          color: "white",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2} style={{ margin: "1px" }}>
            <Grid xs={8}>
              <Typography variant="h5" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {todo.description}
              </Typography>
            </Grid>
            <Grid
              xs={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* action buttns  */}

              {/* check icon button */}
              <IconButton
              className="iconButton"
                sx={{
                  color: todo.isCompleted ? "white":"#8bc34a" ,
                  background: todo.isCompleted ? "#8bc34a":"white",
                  border: "3px solid #8bc34a",
                }} id={todo.id}
                onClick={() => {
                  handleCheckClick();
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* === check icon button === */}

              {/* uodate button */}
              <IconButton
              onClick={handleUpdateClick}
              className="iconButton"
                sx={{
                  color: "#1769aa",
                  background: "white",
                  border: "3px solid #1769aa",
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              {/* === uodate button === */}


              {/* delete button */}
              <IconButton
              className="iconButton"
                sx={{
                  color: "#b23c17",
                  background: "white",
                  border: "3px solid #b23c17",
                }}
                onClick={handleDeleteClick}
              >
                <DeleteOutlineIcon />
              </IconButton>
              {/* === delete button === */}

              {/* === action buttns ===  */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
