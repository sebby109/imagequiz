import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
      <Container fluid>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" ></Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
