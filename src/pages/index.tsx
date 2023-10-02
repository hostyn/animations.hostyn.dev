import Head from "next/head";
import PopupText from "@/views/PopupText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hostyn&rsquo;s animation collection</title>
        <meta name="description" content="A collection of CSS animations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PopupText />
    </>
  );
}
