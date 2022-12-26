import { Box, Container } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

import { Header } from "./Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box component="main" height="100%">
      <Header />
      <Container component="section" sx={{ height: "calc(100% - 60px)" }}>
        {children}
      </Container>
    </Box>
  );
};
