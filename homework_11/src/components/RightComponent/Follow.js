import { useState } from 'react';

export default function Follow( {follow}){

    return (
        <div className='d-flex justify-content-between my-3'>
            <div className='d-flex'>
                <img src={require(`${follow.img}`)} style={{width: 50, height: 50, borderRadius: 50}} alt=''/>

                <div className='mx-3'>                        
                    <p style={{color:'black', margin: 0}}>{follow.name}</p>                
                    <p style={{color:'grey', margin: 0}}>{follow.login}</p>      
                </div>
            </div>
            <button style={{color:'white', backgroundColor: '#1D9BF0', borderRadius:20, height:40, width:90, border:'none'}} >
                Follow
            </button>

            
        </div>
        
    )
}