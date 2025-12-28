import MainMenu from "./MainMenu";
import MainTitle from "./MainTitle";
import MainMenuFooter from "./Footer";

const SideNav = () => {
    return (
        <div className='grid grid-rows-[50px_1fr] h-screen w-54 justify-start bg-muted overflow-auto p-4'>
            <MainTitle />
            <MainMenu />
            <MainMenuFooter />
        </div>
    )
}

export default SideNav