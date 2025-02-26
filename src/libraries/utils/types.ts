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

export interface ThemeContextType {
    isLightMode: boolean;
    toggleMode: () => void;
}

export type Theme =  "light" | "dark";

export interface ThemeProviderProps {
    children: ReactNode;
}