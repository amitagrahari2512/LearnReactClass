import React from 'react'

const FragmentDemo = () => {
    return (
        //It will add one extra dom element .So avoid it we can use React.Fragment
        // <div>
        //     <h1>Fragment Demo</h1>
        //     <p>This describe the fragment demo </p>
        // </div>

        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describe the fragment demo </p>
        </React.Fragment>
    )
}

export default FragmentDemo