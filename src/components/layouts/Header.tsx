import { Box, Button } from "@mui/material";
import { LanguageToggle } from "components/common/LanguageToggle";
import { Logo } from "components/common/Logo";
import { ThemeToggle } from "components/common/ThemeToggle";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "slices/auth.slice";
import type { RootState } from "store";

export const Header = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Box
      component="header"
      sx={{
        height: 60,
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: "appBar",
        bgcolor: "background.default",
      }}
    >
      <Link href="/">
        <Logo width="150px" />
      </Link>
      <Box>
        <LanguageToggle />
        <ThemeToggle />
        {isAuthenticated ? (
          <Button
            variant="text"
            onClick={() => dispatch(authSlice.actions.logout())}
          >
            {t("Logout")}
          </Button>
        ) : (
          <Button variant="text" component={Link} href="/login">
            {t("Login")}
          </Button>
        )}
      </Box>
    </Box>
  );
};
