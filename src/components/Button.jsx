import React, {Component} from 'react'

class Button extends Component{
    constructor(){
        super()
        this.state = {buttonText: 'on'}
    }
    handleClick = () => { this.setState({buttonText: 'off'}) }
    render(){ return <button onClick={this.handleClick}>{this.state.buttonText}</button> }
}

export default Button