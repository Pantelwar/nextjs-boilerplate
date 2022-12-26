import { Box, Typography } from "@mui/material";
import AuthGuard from "components/auth/AuthGuard";
import { Layout } from "components/layouts/Layout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Profile = () => {
  return (
    <AuthGuard>
      <Layout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h2">Profile</Typography>
        </Box>
      </Layout>
    </AuthGuard>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default Profile;
