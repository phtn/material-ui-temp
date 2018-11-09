import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Navbar from './components/navbar'


const App = props => {
  const { classes } = props
  const { container, bar } = classes
  return(
    <div className={container}>
      <Navbar root={container} bar={bar}/>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

const style = {
  container: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: '#0a1030',
    flexGrow: 1,
    border: '1px solid red'
  }
}

export default withStyles(style)(App);
