import MenuItem from "./MenuItem";

const mockItem = ['My Dashboard', 'Teams', 'Employees', 'Accounts', 'Settings']

const MainMenu = () => {
    return (
        <ul className='py-4'>
            {mockItem.map((item, index) => (
                <MenuItem
                    key={`${item}-${index}`}
                    href={index === 0 ? '/dashboard' : `/dashboard/${item.toLowerCase()}`}
                    isActive={index === 0? true:false}
                >
                    {item}
                </MenuItem>
            ))}
        </ul>
    )
}

export default MainMenu;