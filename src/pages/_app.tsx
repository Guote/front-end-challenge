import '$/styles/fonts.css';
import { Provider } from 'react-redux';
import { store } from '$/store/store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Layout } from '$/containers/Layouts';
import GlobalStyle from '$/styles/global';
import theme from '$/styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const client = new ApolloClient({
  uri: 'https://api-frontend-challenge.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}
