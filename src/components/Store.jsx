import React,{Component} from 'react'
import {connect} from 'react-redux'

class Store extends Component{
    constructor({title}){
        super()
        this.state = { title }
    }
    render(){
        return <h1>状态管理机:{this.state.title}</h1>
    }
}

export default connect(state => {
    return {
        title: state.title
    }
})(Store)
