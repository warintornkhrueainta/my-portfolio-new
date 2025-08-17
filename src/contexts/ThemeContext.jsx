// src/contexts/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // โหลด theme จาก localStorage ถ้าไม่มีให้ default = 'light'
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved : 'light';
  });

  useEffect(() => {
    // บันทึก theme ลง localStorage
    localStorage.setItem('portfolio-theme', theme);

    // อัพเดท CSS custom properties โดยใช้ data-theme
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
