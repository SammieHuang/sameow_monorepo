import { cn } from "@/lib/utils"
import { Menu } from "lucide-react";

type MenuItemProps = {
    children: React.ReactNode,
    href: string,
    isActive: boolean;
}

const MenuItem = ({ children, href, isActive }: MenuItemProps) => {
    
    return (
        <a
            href={href}
            className={cn('block w-full p-2 mt-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground',
            isActive && 'bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground'
            )}
        >
         {children}
        </a>
    )
}

export default MenuItem