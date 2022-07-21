/* eslint-disable react/prop-types */

import React, { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { deleteUser, getUserApi } from "../redux/slices/users.slice";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";

const TransitionEffect = (props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
  );
const Transition = forwardRef(TransitionEffect);

export const DeleteDialog = ({ open, handleClose, data }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(data));
    dispatch(getUserApi());
    handleClose();
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
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
        <button
          onClick={handleClose}
          className="btn"
          data-testid="cancleButton"
        >
          Cancle
        </button>
        <button
          onClick={handleDelete}
          className="btn"
          data-testid="deleteButton"
        >
          Delete
        </button>
      </DialogActions>
    </Dialog>
  );
};
