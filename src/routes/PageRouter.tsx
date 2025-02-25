import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/Homepage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import Login from "../pages/Login.tsx";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
};

export default PageRouter;
