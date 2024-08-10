"use client";
import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
export default function DarkModeToggler({ text }: { text?: boolean }) {
  const [Theme, setTheme] = useState("dark");

  const ThemeToggle = () => {
    if (Theme === "dark") {
      document.body.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      document.body.setAttribute("data-theme", localTheme);
      setTheme(localTheme);
    }
  }, [Theme]);

  return (
    <div
      onClick={() => ThemeToggle()}
      className="darkMode-Theme flex items-center gap-4 ms-3 cursor-pointer"
    >
      <button
        type="button"
        className="bg-gray-400 flex justify-center items-center rounded-full w-[35px] h-[35px] cursor-pointer text-white"
      >
        {Theme === "dark" ? <BsMoonStars /> : <BsSun />}
      </button>
      {text ? (
          <span>{Theme === "dark" ? "DARK MODE" : "LIGHT MODE"}</span>
        ) : (
          ""
        )}
    </div>
  );
}
