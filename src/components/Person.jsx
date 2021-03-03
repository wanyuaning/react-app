import React, {Component} from 'react'

class Person extends Component{
    static defaultProps = { name: '无名' }
    render(){
        return <div>{this.props.name}</div>
    }
}

export default Person