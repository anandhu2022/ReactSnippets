import useAuth from "../context/Auth/useAuth.tsx";
import Button from "./ui/Button.tsx";

const AccountHeader = () => {
    const {logout} = useAuth();
    return (
        <div className="flex justify-between text-4xl w-full">
            <div>My Account</div>
            <div className="w-[8%] text-lg"><Button name={"Logout"} logout={logout}/></div>
        </div>
    );
};

export default AccountHeader;
