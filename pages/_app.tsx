import { AppProps } from "next/app";
import { Layout } from "@components/common";
import { FC } from "react";
import "@assets/main.css";
import UIContextProvider from "@components/context/context";

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
      <UIContextProvider>
        <Component {...pageProps} />
        {/* </Layout> */}
      </UIContextProvider>
    </>
  );
}

export default MyApp;
