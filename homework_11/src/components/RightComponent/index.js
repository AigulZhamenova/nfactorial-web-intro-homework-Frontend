import React from "react";
import Trend from './Trend.js'

class RightComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            searchInput: '',
            trends: [
                {
                    id: 0,
                    topic: 'Celebrities Trending',
                    name: 'Kim Seonho',
                    count: 1.989
                },
                
                {
                    id: 1,
                    topic: 'Trending in Kazakhstan',
                    name: 'СССР',
                    count: 4.572,
                },
                
                {
                    id: 2,
                    topic: 'Trending in Kazakhstan',
                    name: 'Токаева',
                    count: null
                },
                
                {
                    id: 3,
                    topic: 'Business & finance Trending',
                    name: '#NFTFam',
                    count: 2.623,
                },
                {
                    id: 4,
                    topic: 'Celebrities Trending',
                    name: 'Kim Seonho',
                    count: 1.989
                },
                
                {
                    id: 5,
                    topic: 'Trending in Kazakhstan',
                    name: 'СССР',
                    count: 4.572,
                },
                
                {
                    id: 6,
                    topic: 'Trending in Kazakhstan',
                    name: 'Токаева',
                    count: null
                },
                
                {
                    id: 7,
                    topic: 'Business & finance Trending',
                    name: '#NFTFam',
                    count: 2.623,
                }
                
        ]
        }
    }
   
      
    onChangeTextInput = (e) => {
    this.setState({ searchInput: e.target.value });
    };


    handleKeyPress = (e) => {
    if (e.key === "Enter") {
        this.props.filterTweetsByContent(this.state.searchInput);   
        this.state.searchInput=''
    }

    };

    render(){
        const { trends} = this.state;

        return(
            <div className="w-75 mt-3">
                <div className='w-100 mx-4' style={{ position: 'relative'}}>
                  
                  <input placeholder='Search Tweeter' className='w-100' style={{
                    border:'none', 
                    borderRadius: 20, 
                    backgroundColor: '#f7f7f7', 
                    fontSize: 15, 
                    outline: 'none',
                    padding: '10px 10px 10px 45px'}} 
                    value={this.state.searchInput}ъ
                    onChange={this.onChangeTextInput}
                    onKeyDown={this.handleKeyPress}
                    />
                  
                  <img src={require('./images/search-icon.png')} style={{ 
                            position: 'absolute', 
                            left: 15, 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            height: 20,
                            width: 20                            
                        }} />
                </div>
                
                <div className="w-100 px-3 py-2 mx-4 my-4" style={{
                    backgroundColor: '#f7f7f7',
                    borderRadius: 15, 
                }}>
                    <p style={{
                    fontWeight:700,
                    fontSize: 19,
                    }}> Trends for you</p>
                    <div className="my-3"> {trends.map((trend) => <Trend trend={trend} key={trend.id}/>)} </div>
                    <button style={{
                        border: 'none',
                        margin: "15px 0",
                        backgroundColor: "transparent",
                        color: "blue"
                    }}>
                        Show more
                    </button>
                </div>


            </div>
        )
    }
}

export default RightComponent;




                {/* <h5 className="mx-3">Home</h5>
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
                 <div>
                    <button onClick={()=>this.filterTweetsByTopic('politics')}>{`Politics ${this.state.count}`}</button>
                    <button onClick={()=>this.filterTweetsByTopic('education')}>Education</button>
                    <button onClick={()=>this.filterTweetsByTopic('blabla')}>Blabla</button>
                </div> 
                <TweetsList tweets={tweets} deleteTweet={this.deleteTweet}/> */}
