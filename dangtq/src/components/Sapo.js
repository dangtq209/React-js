import React from 'react'

class Sapo extends React.Component {
    changeStt2 = (val) => {
        this.props.changeStt2(val)
    }
    changeVal = (val) => {
        this.props.updateSapo(val.target.value)
    }
    showSapo = () => {
        if (this.props.stt2 === 0) {
            return (
                <p onDoubleClick={this.changeStt2}>{this.props.sapo}</p>
            )
        } else {
            return (
                <textarea onBlur={this.changeStt2} value={this.props.sapo} onChange={this.changeVal}></textarea>
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.showSapo()}
            </React.Fragment>
        )
    }
}

export default Sapo 