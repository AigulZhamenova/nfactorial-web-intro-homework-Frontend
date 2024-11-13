import {KZ_IMG_PATH} from '../images';
import Tweet from './Tweet';
    export default function TweetsList(){
    const tweets=[
        {
            authorName: 'Fre Kz today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'Update: Alibek says he has not considered',
            replices: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'Fre Kz today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'Update: Alibek says he has not considered',
            replices: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'Fre Kz today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'Update: Alibek says he has not considered',
            replices: 200,
            retweets: 1000,
            likes: 500
        },
        {
            authorName: 'Fre Kz today',
            authorUserName: '@kz',
            img: KZ_IMG_PATH,
            content: 'Update: Alibek says he has not considered Alibek says he has not considered ',
            replices: 200,
            retweets: 1000,
            likes: 500
        },
    ]
    return tweets.map((tweet,index)=><Tweet {...tweet} key={index}/>)
    
}