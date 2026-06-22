import type { FC, ReactNode } from "react";
import { aboutContent, type AboutLocale } from "@/data/about";
import AboutCard from "./AboutCard";

interface AboutCardsProps {
  children?: ReactNode;
  locale?: AboutLocale;
}

const AboutCards: FC<AboutCardsProps> = ({ children, locale = "ja" }) => {
  const { cards } = aboutContent[locale];

  return (
    <div className="about-cards">
      {children}
      {cards.map((card) => (
        <AboutCard key={card.title} title={card.title} items={card.items} />
      ))}
    </div>
  );
};

export default AboutCards;
