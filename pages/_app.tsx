import { AppProps } from 'next/app';
import '../styles/global.css';

// eslint-disable-next-line max-len, react/jsx-props-no-spreading
const TrumpetApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default TrumpetApp;
