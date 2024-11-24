import { useState } from 'react';

export default function Trend( {trend}){
    // const [title, setTitle] = useState(tweet.content);

    return (
        <div className='d-flex justify-content-between my-3'>
            <div>             
                <p style={{color:'grey', margin: 0}}>{trend.topic}</p>                
                <p style={{color:'black', margin: 0}}>{trend.name}</p>                
                <p style={{color:'grey', margin: 0}}>{trend.count} Tweets</p>
            </div>
            <img src={require("./images/free-icon.png")} style={{
                width: 28,
                height: 28
            }}alt=''/>

            
        </div>
        
    )
}