import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    render(){
        return <h1>{this.state.time}</h1>
    }
    componentDidMount(){
        window.setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        })
    }
}

export default Timer