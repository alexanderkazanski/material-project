import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Home, Assignment, Group, Storefront, Person, Settings, AccountBox, ModeNight } from '@mui/icons-material';
import React from 'react'

function Sidebar({setMode}) {
  return <Box flex={1} p={2} sx={{
    display: {xs: "none", sm: "block"}
  }}>
    <Box position="fixed">
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#pages">
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#group">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#store">
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#user">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#profile">
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
            <Switch onClick={setMode} inputProps={{'aria-label': 'Switch button'}}  />
        </ListItemButton>
      </ListItem>
    </List>
    </Box>
  </Box>
}

export default Sidebar