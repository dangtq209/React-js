import React from 'react'

class Small extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: [
                'images/img-1.jpg',
                'images/img-2.jpg',
                'images/img-3.jpg'
            ]
        }
    }
    change = (val) => {
        this.props.change(val)
    }
    render() {
        var item = this.state.url.map((val, key) => {
            return (
                <img key={key} className={this.props.src === val ? 'active' : ''} src={val} onClick={() => this.change(val)} alt="" />
            )
        })
        return (
            <div id="small">
                {item}
            </div>
        )
    }
}

export default Small 