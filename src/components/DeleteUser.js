/* eslint-disable react/prop-types */

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteDialog } from "./DeleteDialog";

const DeleteUser = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DeleteIcon
        onClick={() => setOpen(true)}
        className="icon"
        data-testid="deleteIcon"
      />
      <DeleteDialog open={open} handleClose={() => setOpen(false)} data={data}/>
    </>
  );
};

export default DeleteUser;
