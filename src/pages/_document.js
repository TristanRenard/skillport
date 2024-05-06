import { Head, Html, Main, NextScript } from "next/document"
const Document = () => (
  <Html className="scroll-smooth" lang="en">
    <Head />
    <body className="bg-tertiary bg-noise text-quaternary">
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document