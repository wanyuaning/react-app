import React from 'react'

export default (props) => {
    console.log('props', props);
    
    return <div>Detail Page {props.match.params.id}</div>
}