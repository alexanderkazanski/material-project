import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  const [itemData, setItemData] = React.useState([
    {
      img: "doctorstrange.jpg",
      title: "Dr. strange movie cover"
    },
    {
      img: 'avengersdoomsday_lob_crd_01.jpg',
      title: 'Avengers doomsday'
    },
    {
      img: 'avengerssecretwars_lob_crd_02.jpg',
      title: 'Avengers Secret Wars'
    },

  ])
  return <Box flex={2} p={2}
    sx={{ display: { xs: "none", sm: "block" } }}
  >
    <Box position="fixed" width={300}>
      <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="dell ceo" src="avatar1.webp" />
        <Avatar alt="amd ceo" src="avatar2.avif" />
        <Avatar alt="salesforce ceo" src="avatar3.webp" />
        <Avatar alt="openai co founder" src="avatar4.jpg" />
        <Avatar alt="dr strange" src="doctorstrange.jpg" />
      </AvatarGroup>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
      <ImageList sx={{ width: 500, height: 250}} cols={3} rowHeight={100}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} gap={5} >
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="avatar2.avif" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="avatar1.webp" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="avatar3.webp" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  </Box>
}

export default Rightbar