import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DynamicRoute from 'components/DynamicRoute'

const Home = DynamicRoute(() => import('containers/Home'/* webpackChunkName: 'home-screen' */))

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)
