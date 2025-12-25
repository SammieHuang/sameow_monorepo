import { useState, useEffect } from 'react';

const useTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const savedTheme = localStorage.getItem('theme');
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const systemPreferDark = mediaQuery.matches;

        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPreferDark);

        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
            setIsDarkTheme(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkTheme(false);
        }

        if (!savedTheme) {
            const handleChange = (e: MediaQueryListEvent) => {
                if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                        document.documentElement.classList.add('dark');
                        setIsDarkTheme(true);
                    } else {
                        document.documentElement.classList.remove('dark');
                        setIsDarkTheme(false);
                    }
                }
            };
            mediaQuery.addEventListener('change', handleChange);
            
            return () => {
                mediaQuery.removeEventListener('change', handleChange);
            };
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }   
    }
    return { isDarkTheme, toggleTheme };
}

export default useTheme;