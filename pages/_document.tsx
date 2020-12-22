import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class TrumpetDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap" rel="stylesheet" />
          {' '}
          { /* <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#f29b1c" />
          <meta name="theme-color" content="#ffffff" /> */ }
        </Head>
        <body className="flex justify-center items-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default TrumpetDocument;
