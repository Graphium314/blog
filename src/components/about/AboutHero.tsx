import type { FC } from "react";
import Image from "next/image";
import { aboutHero } from "@/data/about";
import SocialLinks from "./SocialLinks";
import AboutAffiliation from "./AboutAffiliation";

const AboutHero: FC = () => (
  <div className="about-hero">
    <div className="about-avatar">
      <Image src={aboutHero.avatarSrc} alt="Graphiumのアバター" width={120} height={120} priority />
    </div>
    <div className="about-hero-body">
      <p className="about-name">{aboutHero.name}</p>
      <AboutAffiliation />
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
            alt={`AtCoder ${aboutHero.atcoder.username}のバッジ`}
            width={100}
            height={20}
            unoptimized
          />
        </a>
      </div>
    </div>
  </div>
);

export default AboutHero;
