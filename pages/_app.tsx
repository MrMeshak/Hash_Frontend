import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import store, { getStore } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  const store = getStore(pageProps.initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
