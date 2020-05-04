import React from "react"
import { connect } from "react-redux"

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            interval: null
        };
    }

    clickStart = () => {
        this.props.startTime()
        this.setState({
            interval: setInterval(() => {
                this.props.startTime()
            }, 1000)
        })
    }

    clickStop = () => {
        clearInterval(this.state.interval)
        this.props.stopTime()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.time === 1) {
            this.clickStop();
        }
    }

    render() {
        const { time, status } = this.props
        return (
            <div id="but">
                {time > 0 && (!status ? (<button onClick={this.clickStart} id="start" type="button" className="btn btn-info" style={{ backgroundColor: "green" }}>Start</button>) : (<button onClick={this.clickStop} id="stop" type="button" className="btn btn-danger">Stop</button>))}
                {time <= 0 && (<button onClick={() => this.props.resetTime()} id="reset" type="button" className="btn btn-danger" style={{ backgroundColor: "blue" }}>Reset</button>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    time: state.time,
    status: state.status
})

const mapDisPatchToProps = (dispatch) => ({
    startTime: () =>
        dispatch({
            type: "START-TIME"
        }),
    stopTime: () =>
        dispatch({
            type: "STOP-TIME",
        }),
    resetTime: () =>
        dispatch({
            type: "RESET-TIME",
        }),
});

export default connect(mapStateToProps, mapDisPatchToProps)(Button)
