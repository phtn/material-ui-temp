import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

const menuItems = ['Login', 'Sign up']

export default props => {
  const { root, bar } = props
  return (
    <AppBar position='static' className={root}>
      <Toolbar className={bar}>
        <Typography variant="h6" color="inherit" className={root}>
            Nav
        </Typography>
        {menuItems.map(item => (
          <Button key={menuItems.indexOf(item)} color='inherit'>{item}</Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}