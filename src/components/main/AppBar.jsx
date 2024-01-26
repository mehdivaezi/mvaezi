'use client';

import { useTheme } from 'next-themes';
import { RiBrushLine, RiContrast2Line, RiPaintBrushFill, RiSunFill, RiSunLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const themes = [
  { name: 'light', icon: <RiContrast2Line size={35} /> },
  { name: 'dark', icon: <RiPaintBrushFill size={35} /> },
  { name: 'unicorn', icon: <RiSunFill size={35} /> }
];
export function AppBar() {
  const { theme, setTheme } = useTheme();
  const [themeSelectIndex, setThemeSelectIndex] = useState(0);

  useEffect(() => {
    const findIndex = themes.findIndex((item) => item.name === theme);
    setThemeSelectIndex(findIndex);
  }, [theme]);

  const onChangeTheme = () => {
    const findIndex = themes.findIndex((item) => item.name === theme);
    setTheme(themes[findIndex === 2 ? 0 : findIndex + 1].name);
  };

  return (
    <header className="unicorn:bg-accent/10 light:text-primary unicorn:text-accent light:bg-black/10 fixed inset-x-0 top-0 z-20 mx-auto flex h-20 w-full max-w-5xl items-center justify-center gap-8 rounded-b-full backdrop-blur-lg dark:bg-white/10 dark:text-white">
      <Link href="#">Projects</Link>
      <button onClick={onChangeTheme}>{themes[themeSelectIndex].icon}</button>
      <Link href="#">Contact</Link>
    </header>
  );
}
