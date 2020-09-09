import React from 'react';
import './App.css';
import MovieSearch from './components/movie/moviesSearch/MovieSearch'
import NavBar from './components/uiElements/navbar/navbar'
import Favourite from './components/movie/Favourite/Favourite'
function App() {



  return (
    <div className="App">
     <NavBar/>

    <MovieSearch/>
    <hr/>
    <Favourite/>


    </div>
  );
}

export default App;
