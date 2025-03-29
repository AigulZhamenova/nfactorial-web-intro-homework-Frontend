import { useState, useEffect } from 'react';

import Delete from './Delete.jsx';

export default function List({todo, key, changeStatus, deleteItem,deleteForeverItem, backToItem}){


    
    
  
    
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    console.log(isDeleteOpen)

    const handleClickOutside = (event) => {
      const trigger = document.getElementById(`trigger-${todo.id}`);
      if (trigger && !trigger.contains(event.target) ) {
        setIsDeleteOpen(false); 
      }
    };
  
    useEffect(() => {
      if (isDeleteOpen) {
        document.addEventListener('click', handleClickOutside);
      }
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [isDeleteOpen]);
  

    return (
        <>
        <div className="list" id={`list-item-${todo.id}`} key={key}>
            <img src="/vektor.png" className="del" id={`trigger-${todo.id}`}  onClick={()=> setIsDeleteOpen(!isDeleteOpen)} style={{width: "2.5px", height: "10px", cursor: "pointer"}} alt=""/> 
            <img src={todo.img} onClick={()=>{changeStatus(todo.id)}} style={{width: "24px", height: "24px", cursor: "pointer"}} alt=""/>
            <li key={key} style={{
                  textDecoration:
                    todo.status === "done" ? "line-through" : "none",
                  color:
                  todo.status === "done" ? "#959595" : "black",
                }}>{todo.title}</li>                
            {isDeleteOpen && <Delete deleteItem={deleteItem} deleteForeverItem={deleteForeverItem} backToItem={backToItem} todo={todo} />}
        </div>
        
        </>

    )
}