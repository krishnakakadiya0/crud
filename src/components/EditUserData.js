import React from "react";
import EditIcon from "@mui/icons-material/Edit";

 
 export const EditUserData = (params) => {
    const handleEdit = () => {
      params.clicked(params.data);
    };

    return (
      <button className="icon" onClick={handleEdit}>
        <EditIcon />
      </button>
    );
  };