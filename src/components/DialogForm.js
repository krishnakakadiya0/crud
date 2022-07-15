/* eslint-disable react/prop-types */

import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Form, Formik } from "formik";

export const DialogForm = ({open, handleClose, formik, edit}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Add User Detail</DialogTitle>
      <Formik values={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <TextField
              autoFocus
              margin="dense"
              id="username"
              name="username"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              name="phone"
              label="Phone No."
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <TextField
              autoFocus
              margin="dense"
              id="address"
              name="address"
              label="Address (Suite No, Street Name, City Name, Pincode)"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            <TextField
              autoFocus
              margin="dense"
              id="company"
              name="company"
              label="Company Name"
              type="text"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.company}
            />
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="btn">
              Cancel
            </button>
            <button type="submit" className="btn" data-testid="isEdit"> 
              {edit ? "Edit" : "Add"}
            </button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
