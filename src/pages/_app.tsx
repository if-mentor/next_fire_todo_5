import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Header } from "../../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <RecoilRoot>
        <Component {...pageProps} />;
      </RecoilRoot>
    </>
  );
}

export default MyApp;
