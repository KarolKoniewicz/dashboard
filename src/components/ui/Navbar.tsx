import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Navbar = () => {
    return (
        <div className="relative z-[1] flex w-screen justify-center">
            <NavigationMenu className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
                <NavigationMenuList className="flex">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="p-4">Item One</NavigationMenuTrigger>
                        <NavigationMenuTrigger className="p-4">Item Two</NavigationMenuTrigger>
                        <NavigationMenuTrigger className="p-4">Item Three</NavigationMenuTrigger>
                        <NavigationMenuTrigger className="p-4">Item Four</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default Navbar;