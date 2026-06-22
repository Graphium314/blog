import type { FC } from "react";
import Image from "next/image";
import { aboutContent, aboutHero, type AboutLocale } from "@/data/about";
import SocialLinks from "./SocialLinks";
import AboutAffiliation from "./AboutAffiliation";
import AboutLanguageSwitch from "./AboutLanguageSwitch";

interface AboutHeroProps {
  locale?: AboutLocale;
}

const AboutHero: FC<AboutHeroProps> = ({ locale = "ja" }) => {
  const content = aboutContent[locale];

  return (
    <div className="about-hero">
      <AboutLanguageSwitch locale={locale} />
      <div className="about-avatar">
        <Image src={aboutHero.avatarSrc} alt={content.avatarAlt} width={120} height={120} priority />
      </div>
      <div className="about-hero-body">
        <p className="about-name">{aboutHero.name}</p>
        <AboutAffiliation locale={locale} />
        <SocialLinks />
        <div className="atcoder-badge">
          <a
            href={`https://atcoder.jp/users/${aboutHero.atcoder.username}`}
            target="_blank"
            rel="noopener noreferrer"
            title={aboutHero.atcoder.username}
          >
            <Image
              src={aboutHero.atcoder.badgeUrl}
              alt={content.atcoderBadgeAlt}
              width={100}
              height={20}
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
