import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { countryToFlag } from "utils/countryToFlag";

export const LanguageToggle = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const toggleLanguage = () => {
    router.push({ pathname, query }, asPath, {
      locale: locale === "en" ? "fr" : "en",
    });
  };

  return (
    <Button
      variant="text"
      onClick={toggleLanguage}
      sx={{ p: 0, minWidth: 32, fontSize: 16 }}
    >
      {locale === "en" ? countryToFlag("US") : countryToFlag("FR")}
    </Button>
  );
};
