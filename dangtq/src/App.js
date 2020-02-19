import React from 'react'
import { Provider } from 'react-redux'
import abc from './redux/Store'
import Title from './components/Title'
import Number from './components/Number'
import Button from './components/Button'
import './Bootstrap.css'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Provider store={abc}>
        <div id="wrap">
          <Title />
          <div id="main">
            <Number />
            <Button />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App 