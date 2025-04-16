"use client";

import { useEffect, useState } from "react";

type LanguageData = {
  [key: string]: number;
};

function LanguagesBar({ repoName }: { repoName: string }) {
  const [languages, setLanguages] = useState<LanguageData>({});

  useEffect(() => {
    fetch(`https://api.github.com/repos/laranjeirapedro/${repoName}/languages`)
      .then((res) => res.json())
      .then((data) => setLanguages(data));
  }, [repoName]);

  const total = Object.values(languages).reduce((a, b) => a + b, 0);

  return (
    <div className="mt-4 text-white">
      <div className="flex h-2 rounded overflow-hidden mb-2">
        {Object.entries(languages).map(([lang, size]) => {
          const percent = (size / total) * 100;
          return (
            <div
              key={lang}
              title={`${lang} ${percent.toFixed(1)}%`}
              style={{
                width: `${percent}%`,
                backgroundColor: getLanguageColor(lang),
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        {Object.entries(languages).map(([lang, size]) => {
          const percent = (size / total) * 100;
          return (
            <span key={lang} className="flex items-center gap-1">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(lang) }}
              />
              {lang} {percent.toFixed(1)}%
            </span>
          );
        })}
      </div>
    </div>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Ruby: "#701516",
    Shell: "#89e051",
    Java: "#b07219",
    PHP: "#4F5D95",
    C: "#555555",
    "C++": "#f34b7d",
    default: "#ccc",
  };

  return colors[language] || colors.default;
}

export default LanguagesBar;
