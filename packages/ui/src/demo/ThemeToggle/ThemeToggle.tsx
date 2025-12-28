import { MoonIcon, SunIcon, type LucideIcon } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
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
    
    // Calculate padding based on icon size (approximately 1/4 of icon size, with minimum of 2px)
    const padding = Math.max(2, Math.round(size / 4));
    const buttonSize = size + (padding * 2);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        className={cn('cursor-pointer rounded-full border border-transparent hover:border-gray-300 dark:hover:border-gray-600 p-0 flex items-center justify-center', className)}
                        style={{ width: `${buttonSize}px`, height: `${buttonSize}px`, ...style }}
                        aria-label={label}
                        aria-pressed={isDarkTheme}
                        onClick={(e) => {
                            toggleTheme();
                            onClick?.(e)
                        }}
                        {...props}
                    >
                        <Icon size={size} />         
                    </Button>
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