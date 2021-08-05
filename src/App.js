import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/main';
import Movie from './components/movie'



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <h1 className='App-header-text'>Top 20 movies on TMDB.</h1>
      </header>
      <Switch>
          <Route exact path='/top-20-movies' component={Main}/>
          <Route path='/movie/:id' component={Movie}/>
        </Switch>
    </div>
    <footer>
      <div className="foote-box">
        <h1> DEVELOPER: OLEH KALYNOVSKYI </h1>
        <a href="mailto:oleh.kalynovskyi@gmail.com">Contact me: oleh.kalynovskyi@gmail.com</a>
        <a href="https://github.com/oleh-kalynovskyi">My portfolio on Github</a>
      </div>
    </footer>
    </BrowserRouter>

  );
}

export default App;
