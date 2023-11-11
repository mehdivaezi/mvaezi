"use client";

import { useTheme } from "next-themes";
import { RiContrast2Line, RiSunLine } from "react-icons/ri";
export function AppBar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="max-w-5xl w-full mx-auto p-6">
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "dark" ? (
          <RiSunLine className="text-gray-600 dark:text-gray-200" size={25} />
        ) : (
          <RiContrast2Line
            className="text-gray-600 dark:text-gray-200"
            size={25}
          />
        )}
      </button>
    </header>
  );
}
