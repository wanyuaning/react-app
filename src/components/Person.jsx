import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Person extends Component{
    static defaultProps = { name: '无名' }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render(){
        return <div>{this.props.name} {this.props.age}</div>
    }
}

export default Person