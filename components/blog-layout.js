import Head from "next/head"

export default function BlogLayout({ metadata, children }) {
    return (
      <>
        <Head>
            <title>{metadata.title}</title>
        </Head>
        {children}
      </>
    )
}