// COMPONENTS
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersProvider from './Context/Users';
import CarregandoProvider from './Context/Carregando';
import ErrorsProvider from './Context/ErrorUsers';

// PAGES
import Home from './Pages/Home';
import Usuarios from './Pages/Users';

// CSS
import './App.css';

function App() {
  return (
    <UsersProvider>
      <CarregandoProvider>
        <ErrorsProvider>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/user/:user" component={Usuarios} />
              <Route path="/user/" component={Usuarios} />
            </Switch>
          </div>
        </ErrorsProvider>
      </CarregandoProvider>
    </UsersProvider>
  );
}

export default App;
