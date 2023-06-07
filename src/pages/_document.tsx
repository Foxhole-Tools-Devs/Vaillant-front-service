import { Html, Head, Main, NextScript } from 'next/document'
import classNames from "classnames";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={ classNames("transition-all" ,{"dark": true })} >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
