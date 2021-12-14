import React, { useState, useContext } from "react";
import { Button, Navbar, Switch } from "@blueprintjs/core";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SettingContext } from "../../context/settingsContext";
import Login from "../login";
import { When } from "react-if";
import { LoginContext } from "../../context/context";

export default function Header(props) {
  const settings = useContext(SettingContext);
  const context = useContext(LoginContext);

  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <Navbar>
          <Navbar.Group>
            <Navbar.Heading>
              <When condition={context.loggedIn}>
              <h3>To Do List: {props.incomplete} items pending</h3>
              </When>
            </Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button
              className="bp3-minimal"
              icon="cog"
              text="Settings"
              onClick={() => setShow(!show)}
            />
            <Login/>
            <Modal show={show}>
              <Modal.Header>
                <Modal.Title>Settings</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <label for="select">
                  Select the number of todo items/page:
                </label>
                <select
                  id="select"
                  onChange={(e) => {settings.maximum(e.target.value)} }
                >
                  <option >select</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                </select>

                <Switch checked={!settings.show} label="hide Completed tasks" onChange={() => settings.visible(!settings.show)} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(!show)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() =>{props.save(),props.num(settings.numberOf), setShow(!show)} }>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Navbar.Group>
        </Navbar>
      </header>
    </>
  );
}
