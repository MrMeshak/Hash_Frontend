import {FC} from 'react'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import {ThemeProvider} from 'styled-components'
import {GlobalStyle} from '../styles/global.styles'
import {theme} from '../styles/theme'
import { wrapper } from '../store/store'

const MyApp:FC<AppProps> = ({ Component, ...rest}: AppProps) => {
  const {store, props} = wrapper.useWrappedStore(rest)
  return (
    
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Provider store={store}>
          <Component {...props.pageProps} />
        </Provider>
      </ThemeProvider>
  )
}

export default MyApp
