import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useUser } from './context/user-context'
import * as Pages from './pages'

const AuthenticatedRoutes = () => (
  <Switch>
    <Route path="/" exact component={Pages.Dashboard} />
    <Route path="/edit/:courseId" component={Pages.EditCourse} />
    <Route component={Pages.NotFound} />
  </Switch>
)

const UnauthenticatedRoutes = () => (
  <Route path="/" component={Pages.Login} />
)

export default () => {
  const { user } = useUser()
  return (
    <Router>
      {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
    </Router>
  )
}
