import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';
import RightComponent from './components/RightComponent';

function App() {
  
  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical-devider' style={{marginLeft:'350px'}}></div>
      <Home/>
      <div className='vertical-devider'></div>
      <RightComponent/>
    </div>
  );
}

export default App;
