import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';
import Login from './components/Login';
import NavagationBar from './components/NavagationBar';
import Data from './components/Data';
import Results from './components/Results';


function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  let onLoggedIn = (email) => {
    localStorage.setItem('username', email);
    setUsername(email);
  }

  return (
    <HashRouter>
      <Container fluid>
        <NavagationBar username={username} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/data" component={Data} />
          <Route path="/results" component={Results}/>
          <Route path="/login" >
            <Login onLoggedIn={onLoggedIn} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
