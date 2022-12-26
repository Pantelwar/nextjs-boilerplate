import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

interface Detail {
  url: string;
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const data: Detail[] = [
  {
    url: "/",
    title: "Pantelwar",
    description: "Next.js + MUI + Typescript boilerplate",
    keywords: "nextjs, material-ui, typescript, boilerplate",
  },
  {
    url: "/profile",
    title: "Profile",
  },
];

export const Meta = () => {
  const router = useRouter();
  const details = data.find((d) => d.url === router.asPath) || ({} as Detail);

  return (
    <Head>
      {details.title && <title>{details.title}</title>}
      {details.title && <meta name="title" content={details.title} />}
      {details.description && (
        <meta name="description" content={details.description} />
      )}
      {details.keywords && <meta name="keywords" content={details.keywords} />}

      <NextSeo
        title={details.title}
        description={details.description}
        canonical={details.canonical}
        openGraph={{
          title: details.title,
          description: details.description,
          url: details.canonical,
          locale: "en",
          site_name: "Pantelwar",
        }}
      />
    </Head>
  );
};
