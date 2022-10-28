import { Box } from "@mui/material";
import Link from "next/link";
import Button from "./Button";

const menuItems = [
  { title: "صفحه اصلی", url: "/" },
  { title: "todo list", url: "/todo-list" },
  { title: "مراکز خدمات درمانی", url: "/service-centers" },
  { title: "شعبه‌های ما", url: "/branches" },
  { title: "سوالات متداول", url: "/faq" },
];
const Header = () => {
  return (
    <Box className="flex items-center justify-between h-16 shadow-lg">
      <Box>logo</Box>
      {menuItems.map((menuItem) => (
        <Link key={menuItem.url} href={menuItem.url}>
          <Box className="text-blue-500">{menuItem.title}</Box>
        </Link>
      ))}
      <Button>ورود و فعالسازی</Button>
    </Box>
  );
};

export default Header;
