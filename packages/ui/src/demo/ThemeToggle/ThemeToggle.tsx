import { MoonIcon, SunIcon, type LucideIcon } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";
import useTheme from "./useTheme";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
    size?: number;
    darkIcon?: LucideIcon;
    lightIcon?: LucideIcon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ThemeToggle = ({size = 24, darkIcon, lightIcon, className, style, onClick, ...props}:ThemeToggleProps) => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const Icon = isDarkTheme ? (darkIcon || MoonIcon) : (lightIcon || SunIcon);
    const label = isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme';
    
    // Calculate padding based on icon size (approximately 1/3 of icon size, with minimum of 4px)
    const padding = Math.max(4, Math.round(size / 3));

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        className={cn('bg-transparent cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-200 dark:hover:text-black rounded-full transition-colors', className)}
                        style={{ padding: `${padding}px`, ...style }}
                        aria-label={label}
                        aria-pressed={isDarkTheme}
                        onClick={(e) => {
                            toggleTheme();
                            onClick?.(e)
                        }}
                        type='button'
                        {...props}
                    >
                        <Icon size={size} />         
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <span className='hidden dark:inline'>Enable Light Mode</span>
                    <span className='block dark:hidden'>Enable Dark Mode</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ThemeToggle;