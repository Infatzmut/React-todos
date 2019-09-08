import React from 'react'

export default function About(){
    //react fragment no se muestra en el dom,es como un div invisible
    return(
        <React.Fragment> 
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0</p>
            <p>It is part of a react crash course</p>
        </React.Fragment>
    )
}