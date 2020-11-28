import Document from 'next/document'
import tailwindcss from '!raw-loader!../styles/tailwind.min.css';
import outputcss from '!raw-loader!../styles/output.css';
const cssFile = process.env.NODE_ENV === 'production' ? outputcss : tailwindcss;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style dangerouslySetInnerHTML={{
              __html: cssFile
            }} />
          </>
        )
      }
  }
}

export default MyDocument