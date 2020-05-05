import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Detail from './components/Detail'
import Page404 from './components/Page404'
//import queryString from 'query-string'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/detail/:id" component={Detail} exact />
                    <Route path="/404" component={Page404} />
                    <Route path="*" render={() => (<Redirect to="404" />)} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App
