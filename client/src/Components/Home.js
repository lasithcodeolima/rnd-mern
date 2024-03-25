import React from 'react'


function Home(props) {
  return (
    <div>
        <h1>Home Page</h1>
        {/* call multiple parent prop*/}
        <p>This is the {props.projName} project. Belongs to {props.org}</p>
        {/* call children prop*/}
        {props.children}
    </div>
  )
}

export default Home