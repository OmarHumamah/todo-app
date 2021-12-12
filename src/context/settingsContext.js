import React, { Component } from 'react'

export const SettingContext = React.createContext();


export default function Show(props) {
    const state = {
      show: true,
      numberOf: 3
    };
  
    return (
      <SettingContext.Provider value={state}>
        {props.children}
      </SettingContext.Provider >
    )
  }