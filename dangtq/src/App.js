import React from 'react'
import Slide from './components/Slide'
import Button from './components/Button'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: 'images/banner-1.jpg'
    }
  }
  src1 = () => {
    this.setState({
      src: 'images/banner-1.jpg'
    })
  }
  src2 = () => {
    this.setState({
      src: 'images/banner-2.jpg'
    })
  }
  src3 = () => {
    this.setState({
      src: 'images/banner-3.jpg'
    })
  }
  render() {
    return (
      <div id="slide">
        <Slide src={this.state.src} />
        <Button
          src1={this.src1}
          src2={this.src2}
          src3={this.src3}
        />
      </div>
    )
  }
}

export default App 