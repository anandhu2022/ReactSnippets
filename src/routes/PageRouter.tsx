import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login.tsx";
import useTheme from "../context/Theme/useTheme.tsx";

const PageRouter = () => {
    const {isLightMode} = useTheme();
    return (
        <div className={`${isLightMode && "bg-black"} h-11/12`}>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default PageRouter;
