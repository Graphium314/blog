import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import "../styles/globals.scss";

const navItems = [
  { href: "/", label: "About" },
  { href: "/posts", label: "投稿" },
  { href: "/tools", label: "ツール" },
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <div id="layout_wrapper">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <header>
          <Link href="/" className="navbar-brand">
            <Image src="/GraphiumIcon.png" alt="Graphiumのアイコン" width={40} height={40} id="HeaderIcon" priority />
            Graphiumのぶろぐ
          </Link>
          <nav className="navbar-nav">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${router.pathname === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
      <footer>
        <div>
          <p>
            Graphium314
          </p>
        </div>
      </footer>
    </>
  );
}
