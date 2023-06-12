import { Box } from "@mui/material";
import { Counter } from "components/common/Counter";
import { TodosTable } from "components/home/TodosTable";
import { Layout } from "components/layouts/Layout";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { OrganizationJsonLd } from "next-seo";

const Index = () => {
  return (
    <Layout>
      <OrganizationJsonLd
        type="Corporation"
        id="https://pantelwar.com"
        logo="https://pantelwar.com/static/media/logo.59447da9.png"
        legalName="Pantelwar Private Limited"
        name="Pantelwar"
        address={{
          streetAddress: "Plot no 8, Parmanand Colony, Block B, Sector 12",
          addressLocality: "Dwarka",
          addressRegion: "Delhi",
          postalCode: "110078",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "+91-9999235217",
            contactType: "query",
            email: "sudhanshu@pantelwar.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
          {
            telephone: "+91-9717121984",
            contactType: "query",
            email: "gaurav@pantelwar.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ]}
        sameAs={["https://pantelwar.com"]}
        url="https://pantelwar.com"
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Counter />
      </Box>
      <TodosTable />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en")),
  },
});

export default Index;
