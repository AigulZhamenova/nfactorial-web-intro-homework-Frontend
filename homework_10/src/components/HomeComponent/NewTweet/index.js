import {PROFILE_IMG_PATH} from '../images'

export default function NewTweet(){
    return(
        <div className='p-3 d-flex flex-column' style={{borderBottom: "2px solid whitesmoke"}}>
            <div>
            <img src={PROFILE_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}}/>
            <input placeholder='Whats happening?' style={{border:'none', fontSize: 18, outline:'none'}} className='mx-3'/>  
            </div>
            <div className='p-1 d-flex flex-row justify-content-end'>
                <button className="text-white bg-primary py-2 rounded-pill w-25" style={{border: "none"}}> Tweet </button>
            </div>
        </div>
    )
}