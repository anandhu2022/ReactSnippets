import {ReactNode} from "react";

export interface UserProps {
    id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    __typename: string;
}

export interface AuthContextType {
    user: UserProps | null;
    refetchUser: () => void;
    logout: () => void;
}

export interface AuthProviderProps {
    children: ReactNode;
}

export interface ButtonProps {
    logout?: () => void;
    name: string;
}

export interface ThemeContextType {
    isLightMode: boolean;
    toggleMode: () => void;
}

export type Theme =  "light" | "dark";

export interface ThemeProviderProps {
    children: ReactNode;
}