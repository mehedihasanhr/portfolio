import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=''
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(03, 03, 03, 0.9), rgba(03,03,03,0.9)), url('/bg-image.png')`}
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
