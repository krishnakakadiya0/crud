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
            {formik.errors.name ? <p>{formik.errors.name}</p> : null}
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
            {formik.errors.username ? <p>{formik.errors.username}</p> : null}
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
            {formik.errors.email ? <p>{formik.errors.email}</p> : null}
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
            {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
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
            {formik.errors.address ? <p>{formik.errors.address}</p> : null}
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
            {formik.errors.company ? <p>{formik.errors.company}</p> : null}
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose} className="btn">
              Cancel
            </button>
            <button type="submit" className="btn">
              {edit ? "Edit" : "Add"}
            </button>
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};
