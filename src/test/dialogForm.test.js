import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
const setup = () => {
  const {getByTestId, getByLabelText} = render(
    <Provider store={store}>
      <DialogForm
        open={true}
        handleClose={() => false}
        formik={formik}
        edit={false}
      />
    </Provider>
  );
  const text = getByTestId("isEdit");
  const name = getByLabelText("name");
  const userName = getByLabelText("userName");
  const email = getByLabelText("email");
  const phone = getByLabelText("phone");
  const address = getByLabelText("address");
  const company = getByLabelText("company");
  return {
    text,
    name,
    userName,
    email,
    phone,
    address,
    company
  };
};

describe("Dialog Form test", () => {
  it("DialogForm to be defined", () => {
    const { text } = setup();
    expect(text).toBeInTheDocument();
  });

  it("Displayed Text when Edit false", () => {
    const { text } = setup();
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

  it("Submit Form", () => {
    const mokeOnSubmit = jest.fn();
    const { text, name, userName, email, phone, address, company } = setup();
    fireEvent.change(name.querySelector('input'), {target : {value : "krishna"}});
    fireEvent.change(userName.querySelector('input'), {target : {value : "krishna.0"}});
    fireEvent.change(email.querySelector('input'), {target : {value : "krishna@gmail.com"}});
    fireEvent.change(phone.querySelector('input'), {target : {value : "9856324"}});
    fireEvent.change(address.querySelector('input'), {target : {value : "43, girlik compet, alaskai"}});
    fireEvent.change(company.querySelector('input'), {target : {value : "faixer"}});
    fireEvent.click(text);
    expect(mokeOnSubmit).toHaveBeenCalled();
  });
});
