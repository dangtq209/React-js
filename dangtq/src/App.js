import React from 'react'
import Large from './components/Large'
import Small from './components/Small'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: 'images/img-1.jpg'
    }
  }
  change = (val) => {
    this.setState({
      src: val
    })
  }
  render() {
    return (
      <div id="products">
        <Large src={this.state.src} />
        <Small src={this.state.src} change={this.change} />
      </div>
    )
  }
}

export default App 