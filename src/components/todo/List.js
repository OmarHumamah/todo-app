import React, { useContext } from "react";
import { SettingContext } from "../../context/settingsContext";
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function List(props) {
  const settings = useContext(SettingContext);
  return (
    <>
      {!settings.show ? (
        !props.item.complete && (
          <Card className="todo"
            interactive={true}
            elevation={Elevation.TWO}
            key={props.item.id}
          >
            {!props.item.complete ? (
              <Button
                intent="success"
                onClick={() => props.complete(props.item.id)}
                text="Pending"
              />
            ) : (
              <Button
                intent="danger"
                onClick={() => props.complete(props.item.id)}
                text="Completed"
              />
            )} <label data-testid="result">{props.item.assignee}</label>
            <p>{props.item.text}</p>
            <hr />
            <p class='dif'>
              <small>Difficulty: {props.item.difficulty}</small>
            </p>
          </Card>
        )
      ) : (
        <Card className="todo" interactive={true} elevation={Elevation.TWO} key={props.item.id}>
          {!props.item.complete ? (
              <Button
                intent="success"
                onClick={() => props.complete(props.item.id)}
                text="Pending"
              />
            ) : (
              <Button
                intent="danger"
                onClick={() => props.complete(props.item.id)}
                text="Completed"
              />
            )}<label data-testid="result">{props.item.assignee}</label>
          <p>{props.item.text}</p>
          <hr />
          <p class='dif'>
            <small>Difficulty: {props.item.difficulty}</small>
          </p>
        </Card>
      )}
    </>
  );
}
