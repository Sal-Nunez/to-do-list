import React from 'react'

const MyNewComponent = props => {
    const helloWorld = props.helloWorld
    return (
        <>
            <h1>{helloWorld}</h1>
            <div>We are in My New Component</div>
        </>
    )
}

export default MyNewComponent