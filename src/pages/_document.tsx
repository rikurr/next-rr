import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  override render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
