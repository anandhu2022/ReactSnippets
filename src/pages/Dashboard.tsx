import {useAuth} from "../context/AuthContext.tsx";
import Button from "../components/Button.tsx";

const Dashboard = () => {
    const {logout} = useAuth();
    return (
        <div>
            Account dashboard
            <Button name={"Logout"} handleClick={logout}/>
        </div>
    );
};

export default Dashboard;
