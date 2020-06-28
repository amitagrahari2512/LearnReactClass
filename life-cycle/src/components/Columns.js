import React from 'react'

const Columns = () => {
    return (
        //Here we can use key also in React.Fragment
    //    <React.Fragment>
    //        <td>Name</td>
    //        <td>Amit</td>
    //    </React.Fragment>

    // Alter nativly we can use empty tag also <> </>.But here we can not use Key
    <>
        <td>Name</td>
        <td>Amit</td>
    </>
            
    )
}

export default Columns