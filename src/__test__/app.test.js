import React, {useContext} from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../app";

test("add Tasks to to-do list, and admin capability: Add", () => {
  render(<App />);
  let logeUser = screen.getByTestId("logeUser");
  let logBtn = screen.getByTestId("logBtn");
  
  fireEvent.change(logeUser, { target: { value: "admin" } });
  fireEvent.click(logBtn);

  let button = screen.getByTestId("testBtn");
  let input = screen.getByTestId("name");
  
  fireEvent.change(input, { target: { value: "omar" } });
  fireEvent.click(button);

  let result = screen.getByTestId("result");

  expect(result).toHaveTextContent("omar");
});

test("Check Admin capabilities: Update and Delete", () => {
  render(<App />);

  let result = screen.getByTestId("result");
  let pending = screen.getByTestId("pending");
  fireEvent.click(pending)
  let complete = screen.getByTestId("complete");
  let dltBtn = screen.getByTestId("delete")
  
  expect(result).toHaveTextContent("omar");
  expect(complete).toHaveTextContent("Completed");
  expect(dltBtn).toHaveTextContent("Delete");


});
