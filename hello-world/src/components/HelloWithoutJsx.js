import React from 'react'

const HelloWihoutJsx = () => {
    return (
        React.createElement('div',{id : 'testid', className : 'dummy'},
        React.createElement('h1',null,'Hello Amit this is without JSX'))
    )
}


export default HelloWihoutJsx;