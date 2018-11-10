import React from 'react'
import { AppBar, Toolbar, Icon, Button, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
const menuItems = [<Person/>]

export default props => {
  const { container, bar, btn } = props
  return (
    <AppBar position='static' className={container}>
      <Toolbar className={bar}>
        <Typography variant="h6" color="inherit" className={container}>
            Nav
        </Typography>
        {menuItems.map(item => (
          <Button key={menuItems.indexOf(item)} variant='outlined' size='small' component='span' className={btn} color='inherit'><Icon>{item}</Icon></Button>
        ))}
      </Toolbar>
    </AppBar>
  )
}