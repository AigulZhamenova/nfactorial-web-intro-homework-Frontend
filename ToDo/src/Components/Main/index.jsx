import {useEffect, useState } from 'react';
import Modal from './Modal.jsx';
import List from './List.jsx';
 
var globalId=0;

export default function Main(){
  const [globalId, setGlobalId] = useState(0)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState("active");
    const [todos, setTodos]=useState(() => {
      const storedTasks = localStorage.getItem("todos");
      if (storedTasks) {
          return JSON.parse(storedTasks); 
      }
      return [];  
    });
 
   

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("Saving to localStorage:", todos);
    }, [todos]);

    

    function addTask (newTask){
      setTodos((prevTodos)=>[{
        title: newTask,
        status: "active",
        id: globalId,
        img: "/check.png",
    }, ...todos] )
    setGlobalId((prevId) => prevId + 1);
    
    
   } 
  

   function changeStatus(id){
    console.log(id)
    let updatedTodos=todos.map((item)=>{
      if (item.id!=id) return item;   
      return{
        ...item, 
        status: "done",
        img: "/tick.png"
      } 

      
    })    
    setTodos(updatedTodos);
   }

   function deleteItem(id) {
    let updatedTodos = todos.map((item) => {
      if (item.id !== id) return item;
  
      return {
        ...item,
        status: "trash", 
        img: "/check.png", 
      };
    });
  
    setTodos(updatedTodos);
  }

  function backToItem(id) {
    let updatedTodos = todos.map((item) => {
      if (item.id !== id) return item;
  
      return {
        ...item,
        status: "active", 
        img: "/check.png", 
      };
    });
  
    setTodos(updatedTodos);
  }

  function deleteForeverItem(id) {
    let updatedTodos = todos.filter((item) => item.id !== id);
  
    setTodos(updatedTodos);
  }

   
   
  function filterChange (newStatus) {
    setFilterStatus(newStatus);
  }

  // useEffect(() => {
  //   setFilteredTodos(todos.filter((todo) => {
  //     return todo.status === filterStatus
  //   }))

  //   console.log(filteredTodos)
  // }, [todos, filterStatus])

  const filteredTodos = todos.filter((todo) => todo.status === filterStatus);

 

    return <div className='mainapp '>
    <div className='header'>
      <h1>Simple To Do List</h1>
      <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
    </div>
    <div className='btns'>
      <div className='filterBtn'>
        <button className={`${filterStatus === "active" ? "choosen" : ""}`}
            onClick={() => filterChange("active")}>To Do</button>
        <button className={`${filterStatus === "done" ? "choosen" : ""}`}
            onClick={() => filterChange("done")}>Done</button>
        <button className={`${filterStatus === "trash" ? "choosen" : ""}`}
            onClick={() => filterChange("trash")}>Trash</button>
      </div>
      <div className='rel'>
        <button className="btn" onClick={()=> setIsModelOpen(!isModelOpen)}>
          <img src="/Plus.png" alt="+"/>
        </button>
        {isModelOpen && <Modal addItem={addTask} />}
      </div>
    </div>

    <div className='todosList'>
    <h2>{filterStatus === "active" ? "To Do" 
          : filterStatus === "done" ? "Done": "Trash"}</h2>
    <ul> 
      {filteredTodos.map ((todo) => <List todo={todo} key={todo.id} changeStatus={changeStatus}  deleteItem={deleteItem} deleteForeverItem={deleteForeverItem} backToItem={backToItem} />
      )}
     
    {/* {todos && todos.map ((todo, index) => ( 
        <li key={index}>{todo}</li>
      ))} */}

    </ul>
    </div>        
  </div>
}