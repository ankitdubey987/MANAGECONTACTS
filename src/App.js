import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import AddContact from './Components/contacts/AddContact';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App">
          <Header branding="Contact Manger" />
          <div className="container">
            <Switch>
              <Route exact path="/" component= {Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component= {About} />
              <Route component= {NotFound} />

            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;