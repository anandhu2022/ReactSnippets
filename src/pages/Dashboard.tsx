import {useAuth} from "../context/Auth/useAuth.tsx";
import Button from "../components/Button.tsx";
import useTheme from "../context/Theme/useTheme.tsx";

const Dashboard = () => {
    const {logout} = useAuth();
    const {isLightMode} = useTheme();
    return (
        <div className="w-full flex justify-center items-center flex-col h-11/12 gap-2">
            <div className={`${isLightMode ? "text-white" : "text-black"}`}>Account dashboard</div>
            <div className="w-1/8">
                <Button name={"Logout"} handleClick={logout}/>
            </div>
        </div>
    );
};

export default Dashboard;
