import {ReactNode} from "react";

export interface UserProps {
    id: string;
    username: string;
    email: string;
}

export interface AuthContextType {
    user: UserProps | null;
    login: () => void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface ButtonProps {
    name: string;
    handleClick: () => void;
}