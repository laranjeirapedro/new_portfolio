"use client";

import { useEffect, useState } from "react";
import LanguagesBar from "../LanguageBar/LanguagesBar";

export const Projects = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/laranjeirapedro/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: any) =>
          repo.topics?.includes("portfolio")
        );
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
        >
          <img
            src={`https://raw.githubusercontent.com/laranjeirapedro/${repo.name}/refs/heads/main/public/app-thumbnail.webp`}
            alt={`${repo.name} thumbnail`}
            className="w-full max-h-[210] rounded-lg mt-2"
          />
          <h3 className="text-white text-xl font-semibold mb-2">{repo.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {repo.description || "No description"}
          </p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <button className="w-20 m-4 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
              Git Hub
            </button>
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <button className="w-20 m-4 md:w-28 p-2 border-solid border-[#F0F4F8] border-2 rounded-md bg-[#A0D6FF] text-[#333333] font-bold">
                App
              </button>
            </a>
          )}
          <LanguagesBar repoName={repo.name} />
        </div>
      ))}
    </div>
  );
};
