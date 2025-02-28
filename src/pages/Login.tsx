import {useMutation} from "@apollo/client";
import Button from "../components/ui/Button.tsx";
import useTheme from "../context/Theme/useTheme.tsx";
import {ChangeEvent, FormEvent, useState} from "react";
import {LOGIN_MUTATION} from "../api/schemas/mutation.ts";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import useAuth from "../context/Auth/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {isLightMode} = useTheme();
    const {refetchUser} = useAuth();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [login, {loading}] = useMutation(LOGIN_MUTATION, {
        onError: (err) => {
            setErrorMessage(err.message);
        }
    });
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const {data} = await login({variables: {username, password}});
            if (data?.login.__typename === "CurrentUser") {
                refetchUser();
                navigate('/');
            } else if (data?.login?.__typename === "InvalidCredentialsError") {
                setErrorMessage(data?.login?.message);
                setTimeout(() => setErrorMessage(""), 3000);
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    }
    return (
        <div className="h-full flex justify-center items-center flex-col w-full px-4">
            <form className={`flex flex-col justify-center items-center gap-5 border px-6 py-8
                ${isLightMode ? "border-white" : "botext-black"}
                max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl shadow-lg`}
                  onSubmit={handleSubmit}>
                <div className={`text-3xl font-semibold ${isLightMode ? "text-white" : "text-black"}`}>Sign in</div>

                <input
                    type="email"
                    placeholder="Username"
                    className={`px-4 py-2 rounded-xl border ${isLightMode ? "border-white text-white" : "botext-black text-black"} w-full`}
                    autoComplete="username"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    required
                />

                <div className="relative">
                    <input
                        type={`${showPassword ? "text" : "password"}`}
                        placeholder="Password"
                        className={`px-4 py-2 rounded-xl border ${isLightMode ? "border-white text-white" : "botext-black text-black"} w-full pr-9`}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                    />
                    <RemoveRedEyeOutlinedIcon
                        className={`${isLightMode ? "text-white" : "text-black"} absolute cursor-pointer right-2 top-2`}
                        onClick={() => setShowPassword(!showPassword)}/>
                </div>

                <Button name={loading ? "Logging in..." : "Login"}/>
                {errorMessage &&
                    <div className={`text-red-500 text-xs`}>{errorMessage}</div>}
            </form>
        </div>

    );
};

export default Login;
