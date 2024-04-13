import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "@/components/navigation/navigation";
import css from "./layout.module.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Покупай и читай!</title>
        <meta name="description" content="Отличный книжный магазин" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
          <header>
            <Navigation/>
          </header>
          <main className={css.layout}>
            <div></div>
            {children}
          </main>
    </>
  );
}