import React, {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteUser, getUserApi } from "../redux/slices/users.slice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteUser = (params) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteUser(params.data));
    dispatch(getUserApi());
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClickOpen} className="icon">
        <DeleteIcon />  
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>Are you sure delete this data ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This data will be permanently deleted in the API. You cannot restore after deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="btn">Cancle</button>
          <button onClick={handleDelete} className="btn">Delete</button>
        </DialogActions>
      </Dialog>
    </>
  );
};
