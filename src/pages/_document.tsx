import Document, {
  Html,
  Head,
  Main,
  NextScript,
  // DocumentContext
} from 'next/document';

export default class MyDocument extends Document {
  /*
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const originalRenderPage = ctx.renderPage;
    const sheet: any = {};

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
          </>
        )
      };
    } finally {
      // sheet.seal();
    }
  }
  */

  render() {
    return (
      <Html lang="es-ES">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
