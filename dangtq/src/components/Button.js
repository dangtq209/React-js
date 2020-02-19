import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-dark" onClick={() => {
                this.props.dispatch({ type: 'ACTION' })
            }}>Get number</button>
        )
    }
}

export default connect()(Button) 