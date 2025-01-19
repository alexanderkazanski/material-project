import React, { useState } from 'react'
import { Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange  } from '@mui/icons-material';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.default',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontWeight: '500',
  marginBottom: '20px'
})

const Add = () => {
  const [open, setOpen] = useState(true)
  return (
    <Box>
      <Tooltip onClick={() => setOpen(true)} title="Delete" sx={{ backgroundColor: 'hsl(210, 100%, 45%)', position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" color="grey" textAlign="center">Create Post</Typography>
          <UserBox onClick={() => {}}>
            <Avatar sx={{ width: 30, height: 30 }} src="data:image/jpeg;base64,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" />
            <Typography variant="span" fontWeight="bold">John Doe</Typography>
          </UserBox>
          <TextField
          sx={{width: '100%'}}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={3} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  )
}

export default Add;