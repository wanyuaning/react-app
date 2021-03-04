import React,{Component} from 'react'

class Hello extends Component{
    constructor(){
        super()
        this.state = {
            name: 'xiaohui'
        }
    }
    render(props){
        return <div>{this.state.name}eeeee{this.props.ms}</div>
    }
}

export default Hello