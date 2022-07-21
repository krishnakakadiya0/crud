/* eslint-disable react/prop-types */

import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const EditUserData = ({ clicked, data }) => (
  <EditIcon className="icon" onClick={() => clicked(data)} data-testid="editUser" />
);

export default EditUserData;