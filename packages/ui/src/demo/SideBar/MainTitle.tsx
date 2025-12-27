import { Cat } from "lucide-react"

const MainTitle = () => {
    return (
        <h4 className='flex items-center text-xl font-semibold'>
            <Cat
                size={40}
                className='text-cat pr-2'
            />
            <span>Sameow UI</span>
       </h4>
    )
}

export default MainTitle;