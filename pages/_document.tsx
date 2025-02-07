import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Erik's Portfolio - Blockchain Developer & AI Engineer. Experienced in building innovative web applications and AI solutions." />
        <meta name="keywords" content="Blockchain Developer, AI Engineer, Web Development, TypeScript, React, Next.js, Machine Learning, Portfolio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptoshadow.dev/" />
        <meta property="og:title" content="Erik's Portfolio - Blockchain Developer & AI Engineer" />
        <meta property="og:description" content="Experienced Blockchain Developer and AI Engineer specializing in building innovative web applications and AI solutions." />
        <meta property="og:image" content="https://cryptoshadow.dev/opengraph-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cryptoshadow.dev/" />
        <meta property="twitter:title" content="Erik's Portfolio - Blockchain Developer & AI Engineer" />
        <meta property="twitter:description" content="Experienced Blockchain Developer and AI Engineer specializing in building innovative web applications and AI solutions." />
        <meta property="twitter:image" content="https://cryptoshadow.dev/opengraph-image.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 