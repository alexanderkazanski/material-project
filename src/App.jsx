import './App.css';
import { useState } from 'react'
import Feed from './components/Feed';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';



function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"

        >
          <Sidebar setMode={() => setMode(prevSetMode => {
            if (prevSetMode === 'light') {
              return 'dark'
            }
            return 'light'
          })} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
