import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC } from 'react'
import { useTranslation } from "next-i18next";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { useRouter } from "next/router";

const HomePage: FC = () => {
  const { t } = useTranslation('home')
  const { locale } = useRouter()

  return (
  <>
    <Head>
      <title>Bolt homepage</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Link href={routes(locale || 'nl').move}>
      Link to other page
    </Link>
  </>
)}

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home']))
    },
    revalidate: 600
  }
}

export default HomePage
