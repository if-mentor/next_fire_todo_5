import '../styles/globals.css'
import '../styles/github-markdown.css'

import { RecoilRoot } from 'recoil'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
