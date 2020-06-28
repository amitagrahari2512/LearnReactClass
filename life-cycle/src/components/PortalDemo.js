import React from 'react'
import ReactDom from 'react-dom'

// When we want to use Portal we need to use ReactDom.cretaePortal(Jsx, domNode)
// Where first parameter is JSX (which we want to render) and second parameter is to provide dom node.
const PortalDemo = () => {
    return ReactDom.createPortal((
        <h1>Portal Demo</h1>
    ),
    document.getElementById('portal-root'))
}

export default PortalDemo