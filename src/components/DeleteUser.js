/* eslint-disable react/prop-types */

import React, { useState, forwardRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { deleteUser, getUserApi } from "../redux/slices/users.slice";

const TransitionEffect = (props, ref) => <Slide direction="up" ref={ref} {...props} />
const Transition = forwardRef(TransitionEffect);

const DeleteUser = ({ data }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(data));
    dispatch(getUserApi());
    setOpen(false);
  };

  return (
    <>
      <DeleteIcon onClick={() => setOpen(true)} className="icon" data-testid="deleteIcon" />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth={true}
        data-testid="dialogOverlay"
      >
        <DialogTitle>Are you sure delete this data ?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This data will be permanently deleted in the API. You cannot restore
            after deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={() => setOpen(false)} className="btn" data-testid="cancleButton">
            Cancle
          </button>
          <button onClick={handleDelete} className="btn" data-testid="deleteButton">
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;
