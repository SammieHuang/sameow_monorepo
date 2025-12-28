import { Avatar, AvatarFallback, } from "@/components/ui/avatar"
import ThemeToggle from "../ThemeToggle/ThemeToggle"
const MainMenuFooter = () => {
    return (
        <div className='flex items-center gap-2'>
            <Avatar>
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
        </div>
    )
}

export default MainMenuFooter