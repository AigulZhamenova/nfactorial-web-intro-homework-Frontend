import './App.css';
import Home from './components/HomeComponent';
import RightComponent from './components/RightComponent';
import SideMenu from './components/SideMenuComponent';
import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '', // Состояние для текста поиска
    };
  }

  // Функция для фильтрации
  filterTweetsByContent = (content) => {
    this.setState({ searchInput: content });
  };

  render(){
    const { searchInput } = this.state;
    return (      
      
      <div className="App d-flex flex-row">
        <SideMenu/>
        <div className='vertical-divider' style={{marginLeft:'300px'}}></div>
        <Home searchInput={searchInput} />
        <div className='vertical-divider' ></div>
        <RightComponent filterTweetsByContent={this.filterTweetsByContent}/>
      </div>
    );
  }
}
 
  

export default App;
