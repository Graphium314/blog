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

const siteName = "Graphiumのぶろぐ";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pisnp.net";
const defaultDescription = "About Graphium";
const defaultImagePath = "/GraphiumIcon.png";

const pageMetadata: Record<
  string,
  {
    title: string;
    description: string;
    locale?: string;
  }
> = {
  "/": {
    title: siteName,
    description: defaultDescription,
  },
  "/en": {
    title: `${siteName}`,
    description: "About Graphium",
    locale: "en_US",
  },
  "/posts": {
    title: `投稿 - ${siteName}`,
    description: "ブログ記事一覧",
  },
  "/tools": {
    title: `ツール - ${siteName}`,
    description: "ツール一覧",
  },
  "/test": {
    title: `Test - ${siteName}`,
    description: defaultDescription,
  },
};

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

function normalizePath(path: string) {
  const pathname = path.split("#")[0].split("?")[0] || "/";
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = normalizePath(router.asPath);
  const metadata = pageMetadata[currentPath] ?? {
    title: siteName,
    description: defaultDescription,
  };
  const canonicalUrl = absoluteUrl(currentPath);
  const imageUrl = absoluteUrl(defaultImagePath);

  return (
    <>
      <div id="layout_wrapper">
        <Head>
          <title>{metadata.title}</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content={metadata.description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:locale" content={metadata.locale ?? "ja_JP"} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:image:width" content="1024" />
          <meta property="og:image:height" content="1024" />
          <meta property="og:image:alt" content="Graphiumのアイコン" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={imageUrl} />
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
