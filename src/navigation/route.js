import React from 'react'
import { Redirect, Route as RRDRoute } from 'react-router-dom'

import ApplicationLayout from '../components/application-layout'

function Private ({ children, ...rest }) {
  // TODO: Define a good way to know when the users are authenticated
  const isAuthenticated = false

  return (
    <RRDRoute
      {...rest}
      render={({ location }) => (
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      )}
    />
  )
}

function Route ({
  path,
  children,
  exact = false,
  layout = true,
  private: isPrivate = false
}) {
  const RComponent = isPrivate ? Private : RRDRoute

  if (layout) {
    return (
      <RComponent exact={exact} path={path}>
        <ApplicationLayout>
          {children}
        </ApplicationLayout>
      </RComponent>
    )
  } else {
    return (
      <RComponent exact={exact} path={path}>
        {children}
      </RComponent>
    )
  }
}

export default Route
