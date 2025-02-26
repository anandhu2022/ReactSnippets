import {AuthProviderProps, UserProps} from "../../libraries/utils/types.ts";
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "./useAuth.tsx";


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const navigate = useNavigate();
    const login = () => {
        setUser(():UserProps => {
            return {
                id: "123",
                username: "john_doe",
                email: "john@example.com",
            };
        })
        navigate('/');
        console.log("User Logged In")
    };
    const logout = () => {
        setUser(null);
        navigate('/');
        console.log("User Logged Out");
    };


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;

