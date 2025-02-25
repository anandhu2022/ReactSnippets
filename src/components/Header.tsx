import {useAuth} from "../context/AuthContext.tsx";
import {AccountCircleOutlined} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const handleClick = () => {
        user ? navigate('/dashboard') : navigate('/login');
    }
    return (
        <div className="py-2 px-4 bg-gradient-to-r from-purple-950 to-red-900 flex justify-between gap-2 items-center">
            <h1 className="text-white text-2xl">BLAST!!</h1>
            <AccountCircleOutlined className="text-white cursor-pointer" onClick={handleClick}/>
        </div>
    );
};

export default Header;
