import { Box, ListItem } from "@mui/material";
import Link from "next/link";
import Button from "./Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Drawer from "@mui/material/Drawer";

import Menu from "@mui/icons-material/Menu";
import { useState } from "react";
import Container from "./Container";

const menuItems = [
  { title: "صفحه اصلی", url: "/" },
  { title: "todo list", url: "/todo-list" },
  { title: "مراکز خدمات درمانی", url: "/service-centers" },
  { title: "شعبه‌های ما", url: "/branches" },
  { title: "سوالات متداول", url: "/faq" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Box className="shadow-lg ">
      <Container className="flex items-center justify-between h-16">
        <Box>
          <Menu
            className="block cursor-pointer md:hidden"
            onClick={() => setDrawerOpen(true)}
          />
        </Box>
        <Box>logo</Box>

        {menuItems.map((menuItem) => (
          <Link
            className="hidden md:block"
            key={menuItem.url}
            href={menuItem.url}
          >
            <Box className="text-blue-500">{menuItem.title}</Box>
          </Link>
        ))}
        <Button>ورود و فعالسازی</Button>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box className="w-48">
            {menuItems.map((menuItem) => (
              <Link key={menuItem.url} href={menuItem.url}>
                <ListItem>
                  <Box className="text-blue-500">{menuItem.title}</Box>
                </ListItem>
              </Link>
            ))}
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Header;
