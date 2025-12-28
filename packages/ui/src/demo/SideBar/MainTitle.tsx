import { Cat } from "lucide-react"

const MainTitle = () => {
    return (
        <div className='border-b dark: border-b-black border-b-zinc-300 pb-4 w-full'>
        <h4 className='flex items-center text-xl font-semibold'>
            <Cat
                size={40}
                className='text-cat pr-2'
            />
            <span>Sameow UI</span>
            </h4>
        </div>
    )
}

export default MainTitle;