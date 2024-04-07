import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import {  useNavigate } from 'react-router-dom'


function Home(props) {
    const Navigate=useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        {/* call multiple parent prop*/}
        <p>This is the {props.projName} project. Belongs to {props.org}</p>
        {/* call children prop*/}
        {props.children}

    <Button onClick={()=>Navigate("/UseStateHook")}>useState Hook</Button>
    <Button onClick={()=>Navigate("/LifeCycleHook")}>LifeCycle Hook</Button>

    </div>
  )
}

export default Home