import type { FC } from "react";
import { aboutContent, type AboutLocale } from "@/data/about";

interface AboutAffiliationProps {
  locale?: AboutLocale;
}

const AboutAffiliation: FC<AboutAffiliationProps> = ({ locale = "ja" }) => {
  const { affiliation } = aboutContent[locale];

  return (
    <div className="about-affiliation">
      {affiliation.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default AboutAffiliation;
