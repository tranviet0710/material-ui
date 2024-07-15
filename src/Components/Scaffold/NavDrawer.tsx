import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
export default function NavDrawer() {
  const navItems = [
    { text: "Input Form", route: "/form" },
    { text: "Contact Card Grid", route: "/card-grid" },
    { text: "Contact Table", route: "/table" },
    { text: "Contact Data Grid", route: "/data-grid" },
  ];
  return (
    <BrowserRouter>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={true}>
        <List>
          {navItems.map((navItem) => (
            <ListItem key={navItem.text}>
              <Link to={navItem.route}>{navItem.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <Routes>
          <Route path="/form" element={<InputForm />} />
          <Route path="/card-grid" element={<ContactCardGrid />} />
          <Route path="/table" element={<ContactTable />} />
          <Route path="/data-grid" element={<ContactDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
