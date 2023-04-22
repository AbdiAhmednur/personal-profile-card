import React, {useEffect} from 'react';
import './App.css';
import pic from './pic.jpg';
import Button from './Component/Buttons';
import Main from './Component/MainContent';
import Footer from './Component/Footer';

const App = () => {
  useEffect(() => {
    document.title = "Abdirahman Ahmednur";
  }, []);

  return (
    <div className="container">
      <img src={pic} alt="Profile Picture" />
      <h1 className='Headline'>Abdirahman Ahmednur</h1> 
      
      <em>SEO & Web Developer</em>
      
      < Button />
      < Main />
      < Footer />
      </div>
    
  );
}

export default App;


//https://www.youtube.com/watch?v=bMknfKXIFA8&t=8584s

// <p className='city'><strong>United Kingdom</strong> London</p>