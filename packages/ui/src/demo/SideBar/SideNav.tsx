import MainMenu from "./MainMenu";
import MainTitle from "./MainTitle";

const SideNav = () => {
    return (
        <div className='grid grid-rows-[50px_1fr] h-screen justify-center bg-muted overflow-auto p-4'>
            <MainTitle />
            <MainMenu />
        </div>
    )
}

export default SideNav