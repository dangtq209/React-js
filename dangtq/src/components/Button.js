import React from 'react'

class Button extends React.Component {
    showSrc1 = () => {
        this.props.src1()
    }
    showSrc2 = () => {
        this.props.src2()
    }
    showSrc3 = () => {
        this.props.src3()
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <p id="slide-num">
                <a href="#" onClick={this.showSrc1}>1</a>
                <a href="#" onClick={this.showSrc2}>2</a>
                <a href="#" onClick={this.showSrc3}>3</a>
            </p>
        )
    }
}

export default Button 