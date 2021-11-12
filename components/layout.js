import Sidebar from "./sidebar";
import Box from '@mui/material/Box'

export default function Layout({ children }) {
    const drawerWidth = 240;

    return (
      <Box sx={{ display: 'flex' }}>
         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
          <Sidebar />
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <main>{children}</main>
        </Box>
      </Box>
    )
  }