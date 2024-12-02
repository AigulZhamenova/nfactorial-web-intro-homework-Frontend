import {useEffect, useState } from 'react';
import Modal from './Modal.jsx';
import List from './List.jsx';
 
var globalId=0;

export default function Main(){
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [todos, setTodos]=useState([])
    const [filterStatus, setFilterStatus] = useState("active");
    const [filteredTodos, setFilteredTodos] = useState([]);
  
    function addTask (newTask){
      setTodos([{
        title: newTask,
        status: "active",
        id: globalId++,
        img: "/check.png",
    }, ...todos] )

   }

   function changeStatus(id){
    console.log(id)
    let changeTodos=todos.map((item)=>{
      if (item.id!=id) return item;   
      return{
        ...item, 
        status: "done",
        img: "/tick.png"
      }
   

      
    })
    
    setTodos(changeTodos);

   }

   
  function filterChange (newStatus) {
    setFilterStatus(newStatus);
  }

  useEffect(() => {
    setFilteredTodos(todos.filter((todo) => {
      return todo.status === filterStatus
    }))

    console.log(filteredTodos)
  }, [todos, filterStatus])

 

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
        <button>Trash</button>
      </div>
      <div className='rel'>
        <button className="btn" onClick={()=> setIsModelOpen(!isModelOpen)}>
          <img src="/Plus.png" alt="+"/>
        </button>
        {isModelOpen && <Modal addItem={addTask} />}
      </div>
    </div>

    <div className='todosList'>
    <h2>{filterStatus === "active" ? "To Do" : "Done"}</h2>
    <ul> 
      {filteredTodos.map ((todo) => <List todo={todo} key={todo.id} changeStatus={changeStatus} />
      )}
     
    {/* {todos && todos.map ((todo, index) => ( 
        <li key={index}>{todo}</li>
      ))} */}

    </ul>
    </div>        
  </div>
}