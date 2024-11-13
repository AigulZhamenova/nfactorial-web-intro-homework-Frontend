import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';

function App() {
  
  return (
    <div className="App d-flex mx-5">
      <SideMenu/>
      <div className='vertical-devider' style={{marginLeft:'350px'}}></div>
      <Home/>
    </div>
  );
}

export default App;
