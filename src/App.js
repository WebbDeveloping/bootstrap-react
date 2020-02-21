import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Layout from './Components/Layout';
import { NavigationBar } from './Components/Nav/NavigationBar';
import {Jum} from './Components/Jumbotron/Jum'
import Home2 from './Components/Home/Home2'
import SimpleFooter from './Components/Footers/SimpleFooter';


function App() {
  return (
    <>
      <NavigationBar />
      <Jum />
      <Layout>
      <BrowserRouter>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
        <Route exact path='/home2' component={Home2} />
        <Route component={NoMatch} />
      </Switch>
      </BrowserRouter>
      <SimpleFooter />
      </Layout>
    </>
  );
}

export default App;

