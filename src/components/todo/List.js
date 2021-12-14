import React, { useContext } from "react";
import { SettingContext } from "../../context/settingsContext";
import { Button, Card, Elevation } from "@blueprintjs/core";
import Auth from "../auth";

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

            <Auth capability="update">
            {!props.item.complete ? (
              <Button
              data-testid="pending"
              intent="success"
              onClick={() => props.complete(props.item.id)}
              text="Pending"
              />
              ) : (
                <Button
                data-testid="complete"
                intent="danger"
                onClick={() => props.complete(props.item.id)}
                text="Completed"
                />
                )} 
                </Auth>
            <label data-testid="result">{props.item.assignee}</label>
            <Auth capability="delete">
            <Button data-testid="delete" className="dlt" text='Delete' onClick={()=>props.delete(props.item.id)}/>
            </Auth>
            <p>{props.item.text}</p>
            <hr />
            <p class='dif'>
              <small>Difficulty: {props.item.difficulty}</small>
            </p>
          </Card>
        )
      ) : (
        <Card className="todo" interactive={true} elevation={Elevation.TWO} key={props.item.id}>
            <Auth capability="update">
          
          {!props.item.complete ? (
              <Button
                data-testid="pending"
                intent="success"
                onClick={() => props.complete(props.item.id)}
                text="Pending"
              />
            ) : (
              <Button
                data-testid="complete"
                intent="danger"
                onClick={() => props.complete(props.item.id)}
                text="Completed"
              />
            )}
            </Auth>
            
            <label data-testid="result">{props.item.assignee}</label>
            <Auth capability="delete">
            <Button data-testid="delete" intent="warning" icon='trash' className="dlt" text='Delete' onClick={()=>props.delete(props.item.id)}/>
            </Auth>
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
