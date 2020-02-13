import React from 'react'

class Title extends React.Component {
    changeStt1 = (val) => {
        this.props.changeStt1(val)
    }
    changeVal = (val) => {
        this.props.updateTitle(val.target.value)
    }
    showTitle = () => {
        if (this.props.stt1 === 0) {
            return (
                <h4 onDoubleClick={this.changeStt1}>{this.props.title}</h4>
            )
        } else {
            return (
                <input type="text" onBlur={this.changeStt1} value={this.props.title} onChange={this.changeVal} />
            )
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.showTitle()}
            </React.Fragment>
        )
    }
}

export default Title 