import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "./DataGrid";
import * as yup from "yup";
import { useFormik } from "formik";
import { editUser, getUserApi, setUserApi } from "../redux/slices/users.slice";
import { DeleteUser } from "./DeleteUser";
import {EditUserData} from "./EditUserData";
import { DialogForm } from "./DialogForm";

export const AddUser = () => {
  const usersData = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  let schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    username: yup.string().required("UserName is required"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email is required"),
    phone: yup.string().required("Phone no. is required"),
    address: yup.string().required("Address is required"),
    company: yup.string().required("Company Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      phone: "",
      address: "",
      company: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (edit) {
        dispatch(editUser(values));
      } else {
        dispatch(setUserApi({ id: Math.round(Math.random() * 100), ...values }));
      }
      dispatch(getUserApi());
      setEdit(false);
      handleClose();
      formik.resetForm();
    },
  });
  const [columnDefs] = useState([
    { field: "id", width: 70 },
    { field: "name", width: 250 },
    { field: "username", width: 200 },
    { field: "email", width: 280 },
    { field: "phone", width: 200 },
    { field: "address", width: 460 },
    { field: "company", width: 200 },
    { field: "Delete", width: 80, cellRenderer: DeleteUser },
    {
      field: "Edit",
      width: 80,
      cellRenderer: EditUserData,
      cellRendererParams: {
        clicked: function (data) {
          setOpen(true);
          setEdit(true);
          formik.setValues(data);
        },
      },
    },
  ]);

  useEffect(() => {
    dispatch(getUserApi());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  return (
    <div>
      <div className="header">
        <button
          onClick={handleClickOpen}
          className="btn"
          style={{ marginRight: "20px" }}
        >
          Add User
        </button>
      </div>
      <DataGrid rowData={usersData} columnDefs={columnDefs} />
      <DialogForm open={open} handleClose={handleClose} formik={formik} edit={edit}/>
    </div>
  );
};
