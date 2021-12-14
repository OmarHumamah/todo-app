import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';
import Form from './Form.js';
import List from './List.js';
import Header from './Header.js';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { SettingContext } from "../../context/settingsContext";
import { LoginContext } from '../../context/context';
import { When } from 'react-if';


const ToDo = () => {
  const context = useContext(LoginContext);
  const settings = useContext(SettingContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [numOfItems, setNumOfItems] = useState(settings.numberOf);

  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function saveToLocal(){
    localStorage.setItem('toDoList', JSON.stringify(list))
  }
  
  function saveSettings(){
    localStorage.setItem('settings', JSON.stringify(settings))
  }
  

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }
  
  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }
  useEffect(()=>{
   let saved = JSON.parse(localStorage.getItem('toDoList'));
   saved? setList(saved): null;

   let savedSettings = JSON.parse(localStorage.getItem('settings')) 
   if(savedSettings)  {settings.maximum(savedSettings.numberOf);settings.visible(savedSettings.show); setNumOfItems(savedSettings.numberOf)}
  },[])

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    saveToLocal()
  }, [list]);

   let pageButtons = [];
    for (let i = 1; i < Math.ceil(list.length/settings.numberOf) + 1 ; i++) {
      
     pageButtons.push(<Button intent="primary" className='btn' onClick={()=>{ setNumOfItems(i*settings.numberOf)}}>{i}</Button>) 
      
    }
  

  return (
    <>
      <Header incomplete={incomplete} save={saveSettings} num={setNumOfItems}/>

      <When condition={context.loggedIn} >

      <div id='tt'>

      <Form  submit={handleSubmit} change={handleChange}/>
        </div>
      
      <div id='dd'>
      {list.slice(numOfItems-settings.numberOf, numOfItems).map(item=>{
        return <List item={item} complete={toggleComplete} delete={deleteItem}/>
      })
    }
        {
          pageButtons.map(i=>{
            return i
          })
        }
      </div>
        </When>

        <When condition={!context.loggedIn}> 
           <div id="welcome">
           <Card elevation={Elevation.THREE}>
            <h1>Welcome to ToDo App</h1>
            <h3>Please login to access</h3>
           </Card>
           </div>
        </When>
    </>
  );
};

export default ToDo;
