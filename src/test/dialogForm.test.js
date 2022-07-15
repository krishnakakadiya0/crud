import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DialogForm } from "../components/DialogForm";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const formik = {
  values: {
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    company: "",
  },
};

describe("Dialog Form test", () => {
  it("DialogForm to be defined", () => {
    render(
      <Provider store={store}>
        <DialogForm
          open={true}
          handleClose={() => false}
          formik={formik}
          edit={false}
        />
      </Provider>
    );
    const text = screen.getByTestId("isEdit");
    expect(text).toBeInTheDocument();
  });

  it("Displayed Text when Edit false", () => {
    render(
      <Provider store={store}>
        <DialogForm
          open={true}
          handleClose={() => false}
          formik={formik}
          edit={false}
        />
      </Provider>
    );
    const text = screen.getByTestId("isEdit");
    expect(text).toHaveTextContent("Add");
  });

  it("Displayed Text when Edit true", () => {
    render(
      <Provider store={store}>
        <DialogForm
          open={true}
          handleClose={() => false}
          formik={formik}
          edit={true}
        />
      </Provider>
    );
    const text = screen.getByTestId("isEdit");
    expect(text).toHaveTextContent("Edit");
  });
});
