import { Avatar, AvatarFallback, } from "@/components/ui/avatar"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
const MainMenuFooter = () => {
    return (
        <footer className='flex items-center gap-2'>
            <Avatar className='h-8 w-8'>
                <AvatarFallback className='bg-cat dark:bg-primary'>
                    SH
                </AvatarFallback>

            </Avatar>
            <a
                href='/'
                className='hover:underline'
            >
                    Logout
                </a>
            <ThemeToggle className='ml-auto'/>
        </footer>
    )
}

export default MainMenuFooter