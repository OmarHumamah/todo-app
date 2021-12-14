import React from "react";

import {
  Button,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  Divider,
} from "@blueprintjs/core";
import Auth from "../auth";

export default function Form(props) {
  return (
    <>
      <Card interactive={true} elevation={Elevation.TWO}>
        <FormGroup>
          <h2>Add To Do Item</h2>

          <label>
            <span>To Do Item</span>
            <InputGroup
              id="text-input"
              onChange={props.change}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>
          <Divider />

          <label>
            <span>Assigned To</span>
            <InputGroup
              data-testid="name"
              id="text-input"
              onChange={props.change}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>
          <Divider />

          <label>
            <span>Difficulty</span>
            <input
              onChange={props.change}
              defaultValue={3}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>
          <Divider />

            <Auth capability="create">
          <label>

            <Button
              data-testid="testBtn"
              onClick={props.submit}
              intent="success"
              type="submit"
              >
              Add Item
            </Button>
          </label>
              </Auth>
        </FormGroup>
      </Card>
    </>
  );
}
