import React from 'react'

class Large extends React.Component {
    render() {
        return (
            <div id="large">
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}

export default Large 