import React from "react";
import { Button, Navbar } from "@blueprintjs/core";

export default function Header(props) {
  return (
    <>
      <header>
        <Navbar>
          <Navbar.Group>
            <Navbar.Heading>
              <h3>
                  To Do List: {props.incomplete} items pending
                  </h3>
            </Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Navbar.Group>
        </Navbar>
      </header>
    </>
  );
}
