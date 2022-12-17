import GuestGuard from "components/auth/GuestGuard";
import { Login } from "components/auth/Login";
import { Layout } from "components/layouts/Layout";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage: NextPage = () => {
  return (
    <GuestGuard>
      <Layout>
        <Head>
          <title>Login</title>
        </Head>
        <Login />
      </Layout>
    </GuestGuard>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default LoginPage;
