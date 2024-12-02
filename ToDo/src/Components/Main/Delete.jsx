import { useState } from 'react';


export default function Delete({addItem}){


return <div className='delete'> 
       <button>
            <img src="/delete.png" style={{width: "11px", height: "14px"}} alt=""/> 
            <p>Move to Trash</p>
       </button> 
    </div>
}