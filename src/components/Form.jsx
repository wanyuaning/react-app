import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state = {a: 0, b: 0, res: 0}
    }
    handleA = e => {
        let val = Number(e.target.value); this.setState({ a: val, res: val + this.state.b })
    }
    handleB = e => {
        let val = Number(e.target.value); this.setState({ b: val, res: this.state.a + val })
    }
    render(){
        return <div>
            <input onChange={this.handleA}></input> + 
            <input onChange={this.handleB}></input> = 
            <input value={this.state.res} readOnly></input>
        </div>
    }
}

export default Form