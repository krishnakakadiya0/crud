import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteDialog } from "../components/DeleteDialog";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <DeleteDialog  open={false} handleClose={() => {}} data={{}}/>
    </Provider>
  );
  const deleteButton = utils.getByTestId("deleteButton");
  return {
    deleteButton,
    ...utils,
  };
};

describe("Delete User test", () => {
  it("click on Delete Icon ", () => {
    const { deleteButton } = setup();
    fireEvent.click(deleteButton);
  });
});
