import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

const menuItems = ['Login']

export default props => {
  const { root, bar, btn } = props
  return (
    <AppBar position='static' className={root}>
      <Toolbar className={bar}>
        <Typography variant="h6" color="inherit" className={root}>
            Nav
        </Typography>
        {menuItems.map(item => (
          <Button key={menuItems.indexOf(item)} variant='outlined' size='small' component='span' className={btn} color='inherit'>{item}</Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}