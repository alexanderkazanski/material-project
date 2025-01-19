import React, { useRef, useState } from 'react'
import { Pets, Mail, Notifications } from '@mui/icons-material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: 'hsl(210, 100%, 45%)'
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: "0 10px",
  borderRadius: "10px",
  color: "#000",
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  color: "#000",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  display: "none",
  gap: "20px",
  alignItems: 'center',
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))

function Navbar() {
  const [avatarOpen, setAvatarOpen] = useState(false)
  
  const handleClose = () => setAvatarOpen(false)
  return <AppBar position="static">
    <StyledToolbar>
      <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Lama Dev</Typography>
      <Pets sx={{ display: { xs: "block", sm: "none" } }} />
      <Search><InputBase placeholder="search"></InputBase></Search>
      <Icons>
        <Badge badgeContent={4} color="error">
          <Mail sx={{ color: "#fff" }} />
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications sx={{ color: "#fff" }} />
        </Badge>
        <Avatar onClick={e => setAvatarOpen(true)} sx={{ width: 30, height: 30 }} src="data:image/jpeg;base64,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" />
      </Icons>
      <UserBox onClick={e => setAvatarOpen(true)}>
        <Avatar sx={{ width: 30, height: 30 }} src="data:image/jpeg;base64,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" />
        <Typography variant="span">Avatar</Typography>
      </UserBox>
    </StyledToolbar>
    <Menu
        id="basic-menu"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={avatarOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
  </AppBar>
}

export default Navbar
