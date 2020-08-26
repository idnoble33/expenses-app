// Higher Order Component (HOC) - A component(HOC) that render another component (Regular Component)

import React from 'react';
import ReactDOM from 'react-dom'


const Info = (props) => {
 return(
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
 )
}
const WithAdminWarning = (WrappedComponent) => {
  return(props) => (
  <div> 
    {props.isAdmin && <p>This is private info. Please don't share!</p>}
    <WrappedComponent {...props} />
  </div>
  )
}

const requireAuthentication = (WrappedAthentComponent) => {
  return (props) => (
    <div>
      {/* {props.isAuthenticsted && <p>You need to be authenticated view the info , please log in</p>} */}
      {props.isAuthenticsted ? (<WrappedAthentComponent {...props} />): (
        <p>You need to be authenticated view the info , please log in</p>
      )}
    
    </div>

  )
}

const AdminInfo = WithAdminWarning(Info); 
const AuthenticationInfo = requireAuthentication(Info)

// ReactDOM. render(<AdminInfo isAdmin={false} info="These are the details"/>, document.getElementById('app'));
ReactDOM. render(<AuthenticationInfo isAuthenticsted={false} info="These are the Authentication details"/>, document.getElementById('app'));