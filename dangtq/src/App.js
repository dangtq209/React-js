import React from 'react'
import Thumb from './components/Thumb'
import Title from './components/Title'
import Sapo from './components/Sapo'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Loading...',
      sapo: 'Loading...',
      titleDefault: 'What is Lorem Ipsum?',
      sapoDefault: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stt1: 0,
      stt2: 0
    }
  }

  //
  changeStt1 = (val) => {
    if (this.state.stt1 === 0) {
      this.setState({
        stt1: 1
      })
    } else {
      this.setState({
        stt1: 0
      })
    }
  }
  changeStt2 = (val) => {
    if (this.state.stt2 === 0) {
      this.setState({
        stt2: 1
      })
    } else {
      this.setState({
        stt2: 0
      })
    }
  }

  //
  updateTitle = (val) => {
    this.setState({
      title: val
    })
  }
  updateSapo = (val) => {
    this.setState({
      sapo: val
    })
  }

  //
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: this.state.titleDefault,
        sapo: this.state.sapoDefault
      })
    }, 3000)
  }
  shouldComponentUpdate() {
    if (this.state.title === '') {
      this.setState({
        title: this.state.titleDefault
      })
    } else if (this.state.sapo === '') {
      this.setState({
        sapo: this.state.sapoDefault
      })
    }
    return true
  }

  //
  render() {
    return (
      <div id="main">
        <div className="content-item">
          <Thumb />
          <Title title={this.state.title} stt1={this.state.stt1} changeStt1={this.changeStt1} updateTitle={this.updateTitle} />
          <Sapo sapo={this.state.sapo} stt2={this.state.stt2} changeStt2={this.changeStt2} updateSapo={this.updateSapo} />
        </div>
      </div>
    )
  }
}

export default App 