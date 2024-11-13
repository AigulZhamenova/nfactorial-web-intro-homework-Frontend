import {HOME_SVG, EXPLORE_SVG, NOTIFICATIONS_SVG, MESSAGES_SVG, BOOKMARKS_SVG} from './images'
import MenuItem from './MenuItem'
import './styles.css'
export default function SideMenu(){
    const menu = [
        {
            icon: HOME_SVG,
            name: 'Home'
        },
        {
            icon: EXPLORE_SVG,
            name: 'Explore'
        },
        {
            icon: NOTIFICATIONS_SVG,
            name: 'Notifications'
        },
        {
            icon: MESSAGES_SVG,
            name: 'Messages'
        },
        {
            icon: BOOKMARKS_SVG,
            name: 'Bookmarks'
        }
        ]
    return (
        <div className="mt-3 mx-5 side-menu">
            <img scr={require('./images/twitter.png')} className='logo-icon mb-2'/>
            
            {menu.map((item,index)=> <MenuItem item={item} key={index}/>)}
        </div>        
    )
}