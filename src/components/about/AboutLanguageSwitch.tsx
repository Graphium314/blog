import type { FC } from "react";
import Link from "next/link";
import type { AboutLocale } from "@/data/about";

interface AboutLanguageSwitchProps {
  locale?: AboutLocale;
}

const languageLinks = [
  { locale: "ja", href: "/", label: "日本語" },
  { locale: "en", href: "/en", label: "English" },
] as const;

const AboutLanguageSwitch: FC<AboutLanguageSwitchProps> = ({ locale = "ja" }) => {
  const nextLanguage = languageLinks.find((link) => link.locale !== locale) ?? languageLinks[1];

  return (
    <Link className="about-language-switch" href={nextLanguage.href} aria-label={`Switch to ${nextLanguage.label}`}>
      {nextLanguage.label}
    </Link>
  );
};

export default AboutLanguageSwitch;
