import Button from "../components/Button.tsx";
import {useAuth} from "../context/Auth/useAuth.tsx";
import useTheme from "../context/Theme/useTheme.tsx";

const Login = () => {
    const {login} = useAuth();
    const {isLightMode} = useTheme();
    return (
        <div className="h-full flex justify-center items-center flex-col w-full px-4">
            <form className={`flex flex-col justify-center items-center gap-5 border px-6 py-8
                ${isLightMode ? "border-white" : "botext-black"}
                max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg`}
                  onSubmit={(event) => event.preventDefault()}>
                <div className={`text-3xl font-semibold ${isLightMode ? "text-white" : "text-black"}`}>Sign in</div>

                <input
                    type="text"
                    placeholder="Username"
                    className={`px-4 py-2 rounded-xl border ${isLightMode ? "border-white text-white" : "botext-black text-black"} w-full`}
                    autoComplete="username"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className={`px-4 py-2 rounded-xl border ${isLightMode ? "border-white text-white" : "botext-black text-black"} w-full`}
                    autoComplete="current-password"
                />

                <Button name="Login" handleClick={login}/>
            </form>
        </div>

    );
};

export default Login;
