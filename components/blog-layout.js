import Head from "next/head"

export default function BlogLayout({ metadata, children }) {
    return (
      <>
        <Head>
            <title>{metadata.title}</title>
        </Head>
        <div className="blog-text">
          {children}
        </div>
      </>
    )
}