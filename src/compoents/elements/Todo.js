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
import { useTodosDispatch } from "../../contexts/TodosContext";
import { ToastContext , useToast } from "../../contexts/ToastContext";
export default function Todo({ todo , showDelete , showUpdate }) {
  const dispatch = useTodosDispatch();
  const { showHideToast }  = useToast();
  // const { showHideToast }  = useContext(ToastContext);
  // event handlers
  function handleCheckClick() {
    dispatch({ type : "toggleCompleted", payload: todo});
    showHideToast("تم التعديل بنجاح");
  } 
  function handleDeleteClick() {
    showDelete(todo);
  }

  function handleUpdateClick() {
    showUpdate(todo);
  }
  

  // event handlers
  return (
    <>
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
            <Grid sm={8}>
              <Typography variant="h5" sx={{ textAlign: "right", textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                {todo.title}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                {todo.description}
              </Typography>
            </Grid>
            <Grid
              sm={4}
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
