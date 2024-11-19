import { COMMENTS, RETWEETS, LIKES, SHARE } from "../images";

export default function Tweet(tweet){
    return(
        <div className='mt-2 px-3' style={{borderBottom: '2px solid whitesmoke'}}>
            <p className='mx-5' style={{fontSize:13, fontWeight:'600'}}>You might like! <span style={{color:'blue'}}>See more</span></p>
            <div className='d-flex'>
                <img src={tweet.img} style={{width: 50, height: 50, borderRadius: 50}}/>
                <div className='mx-3'>
                    <p>{tweet.authorName} <span>{tweet.authorUserName}</span></p>
                    <p>{tweet.content}</p>
                </div>
            </div>
            <div className='d-flex m-auto justify-content-between' style={{width:'80%'}}>
                <div className='d-flex'>
                    <div style={{width:20, height:20}}>{COMMENTS}</div>
                    <p className='px-1'>{tweet.replices}</p>
                </div>
                <div className='d-flex'>
                    <div style={{width:20, height:20}}>{RETWEETS}</div>
                    <p className='px-1'>{tweet.retweets}</p>
                </div>
                <div className='d-flex'>
                    <div style={{width:20, height:20}}>{LIKES}</div>
                    <p className='px-1'>{tweet.likes}</p>
                </div>
                <div className='d-flex'>
                    <div style={{width:20, height:20}}>{SHARE}</div>
                    <p className='px-1'>{tweet.share}</p>
                </div>
            </div>
        </div>
    )
}