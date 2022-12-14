import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useGetUserQuery } from "../redux/api";

function Layout({ children }) {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { userId } = useSelector((state) => state.global);
  const { data } = useGetUserQuery(userId);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
