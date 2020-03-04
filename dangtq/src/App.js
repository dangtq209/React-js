import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Detail from './components/Detail'
import Page404 from './components/Page404'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div id="body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/detail" component={Detail} />
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}
