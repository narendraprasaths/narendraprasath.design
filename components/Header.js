import React from "react";
import Head from "next/head";
import { attributes } from "../content/site_meta.md";

const Header = (props) => {
  return (
    <Head>
      <title>{attributes.head_title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content={attributes.twitter_card} />
      <meta name="twitter:site" content={attributes.twitter_site} />
      <meta name="twitter:creator" content={attributes.twitter_creator} />
      <meta property="og:url" content={attributes.og_url} />
      <meta property="og:title" content={attributes.og_title} />
      <meta property="og:description" content={attributes.og_description} />
      <meta property="og:image" content={attributes.og_image} />

      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      {attributes.google_analytics_tag && (
        <>
          {/* Google tag (gtag.js) */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${attributes.google_analytics_tag}`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${attributes.google_analytics_tag}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
    </Head>
  );
};

export default Header;
