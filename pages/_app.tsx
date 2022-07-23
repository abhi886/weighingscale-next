import { AppProps } from "next/app";
import { Layout } from "@components/common";
import { FC } from "react";
import "@assets/main.css";
import PluContextProvider from "@components/context/PluContextProvider";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

const Noop: FC<Props> = ({ children }) => <>{children}</>;
function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { layout: FC<Props> } }) {
  const Layout = Component.layout ?? Noop;
  return (
    <>
      {/* <Layout> */}
      <PluContextProvider>
        <Component {...pageProps} />
        {/* </Layout> */}
      </PluContextProvider>
    </>
  );
}

export default MyApp;
