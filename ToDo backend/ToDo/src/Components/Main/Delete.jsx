import { useState } from 'react';


export default function Delete({deleteItem,deleteForeverItem, backToItem, todo}){


return <div className='delete'> 
        {todo.status === "trash" ? (
        <>
          <button className="btnDelete"  onClick={() => deleteForeverItem(todo.id)}>
            <img src="/delete.png" style={{width: "24px", height: "24px"}} alt=""/> 
            Delete Forever
          </button> 
          <button className="btnDelete"  onClick={() => backToItem(todo.id)}>
            <img src="/move.png" style={{width: "24px", height: "24px"}} alt=""/> 
            Move Back To To Do
          </button> 
        </>
      ) : (
        <>
          <button className="btnDelete"  onClick={() => deleteItem(todo.id)}>
            <img src="/delete.png" style={{width: "24px", height: "24px"}} alt=""/> 
            Move to Trash
           </button> 
        </>
      )} 
    </div>
}