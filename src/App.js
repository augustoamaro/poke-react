import React from 'react';

//Pages
import Main from './pages/Main';

// Styles
import './pages/Main.css';

// Router
import { Route } from 'react-router-dom';

function App() {
  return (
    <Main>
      <Route exact path="/" component={Main} />
    </Main>
  );
}

export default App;
