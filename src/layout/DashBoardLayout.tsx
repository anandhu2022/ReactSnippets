import {Outlet} from "react-router-dom";
import useTheme from "../context/Theme/useTheme.tsx";
import AccountHeader from "../components/AccountHeader.tsx";

const DashBoardLayout = () => {
    const {isLightMode} = useTheme();
    return (
        <div
            className={`bg-gradient-to-r from-purple-950 to-red-900 h-full flex flex-col ${isLightMode ? "text-white" : "text-black"}`}>
            <div
                className={`m-2 h-[9%] ${isLightMode ? "bg-black" : "bg-white"} px-5 flex items-center rounded-2xl`}>
                <AccountHeader />
            </div>
            <div className="flex flex-row flex-1">
                <div
                    className={`m-2 w-[25%] ${isLightMode ? "bg-black" : "bg-white"} rounded-2xl flex items-center justify-center`}>Account
                    Categories
                </div>
                <div
                    className={`m-2 w-[75%] ${isLightMode ? "bg-black" : "bg-white"} rounded-2xl flex items-center justify-center`}>
                    <Outlet/></div>
            </div>
        </div>
    );
};

export default DashBoardLayout;
