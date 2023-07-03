import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NAVBAR
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}