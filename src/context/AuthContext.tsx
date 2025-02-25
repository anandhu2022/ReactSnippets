import {AuthContextType, AuthProviderProps, UserProps} from "../libraries/utils/types.ts";
import {createContext, FC, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const navigate = useNavigate();
    const login = () => {
        setUser(() => {
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

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
