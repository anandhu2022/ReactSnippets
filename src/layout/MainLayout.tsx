import {Outlet} from "react-router-dom";
import Header from "../components/ui/Header.tsx";
import Footer from "../components/ui/Footer.tsx";

const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-[10%]">
                <Header/>
            </div>
            <main className="flex-1">
                <Outlet/>
            </main>
            <div
                className="h-[5%] bg-gradient-to-r from-purple-950 to-red-900 flex w-full justify-center items-center text-white">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;
