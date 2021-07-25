import 'styles/globals.css'

import { NextPage } from 'next'
import { AppProps } from 'next/dist/next-server/lib/router/router'

if (process.env['NEXT_PUBLIC_API_MOCKING'] === 'enabled') {
  require('../../.mocks/')
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  console.log(process.env['NEXT_PUBLIC_API_MOCKING'])
  return <Component {...pageProps} />
}

export default MyApp
