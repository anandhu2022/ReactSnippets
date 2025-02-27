import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login.tsx";
import useTheme from "../context/Theme/useTheme.tsx";
import MainLayout from "../layout/MainLayout.tsx";
import DashBoardLayout from "../layout/DashBoardLayout.tsx";

const PageRouter = () => {
    const {isLightMode} = useTheme();
    return (
        <div className={`${isLightMode && "bg-black"}`}>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/dashboard" element={<DashBoardLayout/>}>
                        <Route index element={<Dashboard/>}/>
                    </Route>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default PageRouter;
