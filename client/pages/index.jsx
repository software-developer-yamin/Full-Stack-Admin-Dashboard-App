import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ThemeSwitch from "../components/ThemeSwitch";
import Navbar from "../components/Navbar";
import Layout from "../layout";

export default function Index() {
  return (
    <Layout>
      <Typography variant="h4" component="h1" gutterBottom>
        Home Page
      </Typography>
    </Layout>
  );
}
