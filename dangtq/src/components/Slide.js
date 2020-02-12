import React from 'react'

class Slide extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="slide-img"><img src={this.props.src} /></div>
        )
    }
}

export default Slide 