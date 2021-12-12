import React, {useContext} from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../app";

test("add Tasks to to-do list", () => {
  render(<App />);
  let button = screen.getByTestId("testBtn");
  let input = screen.getByTestId("name");

  fireEvent.change(input, { target: { value: "omar" } });
  fireEvent.click(button);

  let result = screen.getByTestId("result");

  expect(result).toHaveTextContent("omar");
});
