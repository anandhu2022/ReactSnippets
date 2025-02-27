import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../context/Auth/useAuth.tsx";
import useTheme from "../../context/Theme/useTheme.tsx";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {AccountCircleOutlined} from "@mui/icons-material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const {user} = useAuth();
    const {isLightMode, toggleMode} = useTheme();
    const navigate = useNavigate();
    const [sideBar, setSideBar] = useState<boolean>(false);
    const [shoppingCartSidebar, setShoppingCartSidebar] = useState<boolean>(false);
    const Icon = isLightMode ? LightModeIcon : DarkModeIcon;
    const transition = "transform ease-out duration-500 transform hover:scale-125";
    const categories = <>
        <div className={`hover:bg-gray-950 cursor-pointer p-2 rounded transition duration-500 ${transition}`}>Category
        </div>
        <div className={`hover:bg-gray-950 cursor-pointer p-2 rounded transition duration-500 ${transition}`}>Category
        </div>
        <div className={`hover:bg-gray-950 cursor-pointer p-2 rounded transition duration-500 ${transition}`}>Category
        </div>
        <div className={`hover:bg-gray-950 cursor-pointer p-2 rounded transition duration-500 ${transition}`}>Category
        </div>
        <div className={`hover:bg-gray-950 cursor-pointer p-2 rounded transition duration-500 ${transition}`}>Category
        </div>
    </>;
    return (
        <div
            className="px-3 bg-gradient-to-r from-purple-950 to-red-900 flex justify-between gap-2 items-center h-full">
            <div className="flex flex-row items-center gap-3">
                <div className="block md:hidden">
                    <MenuOutlinedIcon className="text-white cursor-pointer" onClick={() => setSideBar(!sideBar)}/>
                </div>
                <Link to='/'>
                    <h1 className="text-white text-2xl">STORE</h1>
                </Link>
            </div>
            <div className="hidden md:block">
                <div className="flex flex-row gap-5 text-white flex-wrap">
                    {categories}
                </div>
            </div>

            <div className="flex gap-6">
                <Icon
                    onClick={toggleMode}
                    className={`text-white cursor-pointer ${transition}`}
                />

                <AccountCircleOutlined
                    className={`text-white cursor-pointer ${transition}`}
                    onClick={() => user ? navigate('/dashboard') : navigate('/login')}
                />
                <ShoppingCartIcon
                    className={`text-white cursor-pointer ${transition}`}
                    onClick={() => setShoppingCartSidebar(!shoppingCartSidebar)}
                />

            </div>
            {sideBar &&
                <div className="fixed top-0 left-0 h-full bg-gray-900 z-50 block md:hidden w-3/4 sm:w-1/2">
                    <div className="flex items-center justify-between px-5">
                        <h1 className="text-white text-2xl py-2">STORE</h1>
                        <CloseIcon onClick={() => setSideBar(!sideBar)} className="text-white"/>
                    </div>
                    <div className="p-4 w-full h-full text-white">
                        {categories}
                    </div>
                </div>
            }
            {shoppingCartSidebar &&
                <div className="fixed top-0 right-0 w-1/2 md:w-1/3 h-full bg-gray-900 z-50">
                    <div className="flex items-center justify-between px-5">
                        <h1 className="text-white text-2xl py-2">Shopping Cart</h1>
                        <CloseIcon onClick={() => setShoppingCartSidebar(!shoppingCartSidebar)} className="text-white"/>
                    </div>
                    <div className="p-4 w-full h-full text-white">
                        {/* Shopping cart items */}
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;
