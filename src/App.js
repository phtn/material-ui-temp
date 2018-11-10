import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Navbar from './components/navbar'
import Hero from './components/hero';

const App = props => {
  const { classes } = props
  // const { container, bar } = classes

  return(
    <div>
      <Navbar {...classes}/>
      <Hero/>
      <Hero/>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

const style = theme => ({
  container: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#0a1030',
    flexGrow: 1,
  },
  btn: {
    margin: theme.spacing.unit,
    backgroundColor: '#030511'
  }
}) 

export default withStyles(style)(App);