import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import './style.css'

import { v4 as uuid } from 'uuid';
import Form from './Form.js';
import List from './List.js';
import Header from './Header.js';
import { Button, } from '@blueprintjs/core';
import { SettingContext } from "../../context/settingsContext";


const ToDo = () => {
 
  const settings = useContext(SettingContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [numOfItems, setNumOfItems] = useState(settings.numberOf);

  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }
  function next(){
    setNumOfItems()
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

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

   let pageButtons = [];
    for (let i = 1; i < Math.ceil(list.length/settings.numberOf) + 1 ; i++) {
      
     pageButtons.push(<Button intent="primary" className='btn' onClick={()=>{ setNumOfItems(i*settings.numberOf)}}>{i}</Button>) 
      
    }
  

  return (
    <>
      <Header incomplete={incomplete}/>

      <div id='tt'>

      <Form  submit={handleSubmit} change={handleChange}/>
        </div>
      
      <div id='dd'>
      {list.slice(numOfItems-settings.numberOf, numOfItems).map(item=>{
        return <List item={item} complete={toggleComplete}/>
      })
      }
        {
          console.log(pageButtons)}{
          pageButtons.map(i=>{
            return i
          })
        }
      </div>
    </>
  );
};

export default ToDo;
