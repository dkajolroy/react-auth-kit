import React from "react";
import { Link } from "react-router-dom";

const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Login",
    path: "/login",
  },
];

function Menubar() {
  return (
    <div style={menuContainer}>
      {menuData.map((item, index) => (
        <Link style={menuItems} key={index} to={item.path}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Menubar;

const menuContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
};
const menuItems: React.CSSProperties = {
  padding: "10px 20px",
  textDecoration: "none",
};
