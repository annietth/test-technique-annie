import React from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar/SearchBar"
import './Components/SearchBar/SearchBar.css'
import Header from './Components/Header/Header'
import HeroImage from './Asset/Images/Cardshero.png'
import Button from './Components/Button/Button'
import './Components/Button/Button.css'


function App() {
  return (
    <div className="App">
      <div className='hero'>

        <div className='heroLeft'>

          <div className='heroLeft'>
            <Header/>
          </div>

          <div className=' heroLeft allText'>
            <h1>Weather Application and Forecast</h1>
            <h2>Consult our application to know the weather day by day. Simple and practical! </h2>
            <h3>Enter the city in the search bar! </h3>
          </div>
          <div className=' heroLeft searchBar'>
            <SearchBar placeholder="Search City..." />
            <Button />
          </div>
        </div>
        <div className='heroRight'>
          <img className="imagehero"src={HeroImage} alt="imagehero"/>
        </div>
      </div>
    </div>
  );
}

export default App;
