import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { Theme, useTheme } from "@mui/material/styles";

const navItems = [
  { text: "Input Form", route: "/form" },
  { text: "Contact Card Grid", route: "/card-grid" },
  { text: "Contact Table", route: "/table" },
  { text: "Contact Data Grid", route: "/data-grid" },
];

const drawerWidth  = 240;

const themeStyles = (theme: Theme)=> {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  }
}

const simpleStypes = {
  drawer : {
    width: drawerWidth,

    "& .MuiBackdrop-root" : {
      display: "none"
    }
  },
  drawPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120, 120, 120, 0.2)"
  },
  mainContent: {
    marginLeft: drawerWidth,
    padding: "10px"
  }
}


export default function NavDrawer() { 
  const themes = useTheme();
  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={themeStyles(themes).appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer 
      variant="temporary" 
      open={true} 
      sx={simpleStypes.drawer}
      PaperProps={{
        sx: simpleStypes.drawPaper,
        elevation: 9
      }}>
        <Toolbar/>
        <List>
          {navItems.map((navItem) => (
            <ListItem key={navItem.text}>
              <Link to={navItem.route}>{navItem.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={simpleStypes.mainContent}>
        <Toolbar/>
        <Routes>
        <Route path="/" element={<ContactForm />} />
          <Route path="/form" element={<ContactForm />} />
          <Route path="/grid" element={<ContactCardGrid />} />
          <Route path="/table" element={<ContactTable />} />
          <Route path="/datagrid" element={<ContactDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
