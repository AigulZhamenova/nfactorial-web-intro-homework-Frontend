import { BOOKMARKS_SVG, EXPLORE_SVG, HOME_SVG, MESSAGES_SVG, NOTIFICATIONS_SVG } from './images'
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
        <div className="mt-3 side-menu">
            <img src={require('./images/twitter.png')} className="logo-icon mb-2"/>
            {menu.map((item, index)=> <MenuItem item={item} key={index}/>)}

            <button className="btn text-white bg-primary py-2 rounded-pill"> Tweet </button>

            <div className='bottom d-flex flex-row justify-content-between align-items-center'>   
                <div className='d-flex flex-row'>
                    <img src={require('./images/profilePhoto.jpeg')} style={{width: 50, height: 50, borderRadius: 50}}/>
                    <div className='d-flex flex-column mx-2 justify-content-center'>
                        <p className='m-0'>Aigul Zhamenova</p>
                        <p className='text-muted m-0'>@azhamenova</p>
                    </div>
                </div>
                <img src={require('./images/vector.png')} style={{width: 20, height: 20}} className=''/>
               
            </div>
        </div>
    )
}