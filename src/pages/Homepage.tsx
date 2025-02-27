import {useAuth} from "../context/Auth/useAuth.tsx";
import useTheme from "../context/Theme/useTheme.tsx";

const Homepage = () => {
    const {isLightMode} = useTheme();
    const {user} = useAuth();
    return (
        <div
            className={`${isLightMode ? "text-white" : "text-black"} h-full w-full flex justify-center items-center flex-col gap-2`}>
            <div className="text-5xl">Homepage</div>
            {user && <h1 className="text-2xl">Welcome, {user.firstName + " " + user.lastName}!</h1>}
        </div>
    );
};

export default Homepage;
