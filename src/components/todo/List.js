import React, { useContext } from "react";
import { SettingContext } from "../../context/settingsContext";
import { Button, Card, Elevation } from "@blueprintjs/core";


export default function List(props) {
  const settings = useContext(SettingContext);
  return (
    <>
      {console.log(settings)}
      { settings.show && 
        <Card interactive={true} elevation={Elevation.TWO} key={props.item.id}>
          <p>{props.item.text}</p>
          <p>
            <small data-testid="result" >Assigned to: {props.item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {props.item.difficulty}</small>
          </p>
          <Button onClick={() => props.complete(props.item.id)}>
            Complete: {props.item.complete.toString()}
          </Button>
          <hr />
        </Card>
      }
    </>
  );
}
