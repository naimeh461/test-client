import { HeartSwitch } from "@anatoliygatt/heart-switch";
import  { useState, useEffect } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
<div className='m-2'>

<HeartSwitch
        size="sm"
        onClick={handleThemeSwitch}
        
        
      />
  </div>
  );
};
