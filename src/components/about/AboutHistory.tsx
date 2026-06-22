import type { FC } from "react";
import { aboutContent, type AboutLocale } from "@/data/about";

interface AboutHistoryProps {
  locale?: AboutLocale;
}

const AboutHistory: FC<AboutHistoryProps> = ({ locale = "ja" }) => {
  const { history, historyTitle } = aboutContent[locale];

  return (
    <div className="about-card history-card">
      <h3>{historyTitle}</h3>
      <div className="history-grid">
        {history.map((entry) => (
          <div key={`${entry.period}-${entry.detail}`} className="history-row">
            <div className="history-period">{entry.period}</div>
            <div className="history-detail">{entry.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutHistory;
