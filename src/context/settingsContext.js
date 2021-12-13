import React, { Component, useState } from 'react'

export const SettingContext = React.createContext();


export default function Show(props) {
  const [maximum, setMaximum] = useState(2);
  const [visible, setVisible] = useState(true);

    const state = {
      show: visible,
      numberOf: maximum,
      maximum: setMaximum,
      visible: setVisible
    };
  
    return (
      <SettingContext.Provider value={state}>
        {props.children}
      </SettingContext.Provider >
    )
  }