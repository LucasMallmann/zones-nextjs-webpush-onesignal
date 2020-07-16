import Document, { Head, Main, NextScript } from "next/document";

const APP_NAME = "next-pwa example";
const APP_DESCRIPTION = "This is an example of using next-pwa plugin";

export default class extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html lang="en" dir="ltr">
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" />
        <script type="text/javascript" src="/blog/onesignal.js" />

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
