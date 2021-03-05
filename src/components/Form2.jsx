import React,{Component} from 'react'

class Form2 extends Component{
    handle = e => { let a = Number(this.refs.a.value); let b = Number(this.refs.b.value); this.refs.c.value = a + b }
    render(){ return <div  onChange={this.handle}><input ref="a" type="text"/> + <input ref="b" type="text"/> = <input ref="c" type="text"/></div> }
} 

export default Form2