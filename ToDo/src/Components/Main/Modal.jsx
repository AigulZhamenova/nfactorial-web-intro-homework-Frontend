import { useState } from 'react';


export default function Modal({addItem}){

const [task, setTask] =useState();
function handleInput(event){
    setTask(event.target.value)

}





return <div className='modal'>  
       <p>Add New To Do </p>
       <textarea type="text"placeholder='Your text' onChange={handleInput} value={task}  />
       <button  className='addBtn' onClick={()=>{addItem(task); setTask('')}} > Add </button>
    </div>
}