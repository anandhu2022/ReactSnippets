import {AuthProviderProps, UserProps} from "../../libraries/utils/types.ts";
import {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./useAuth.tsx";
import {useMutation, useQuery} from "@apollo/client";
import {ACTIVE_CUSTOMER_QUERY} from "../../api/schemas/query.ts";
import {LOGOUT_MUTATION} from "../../api/schemas/mutation.ts";


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const navigate = useNavigate();
    const {data} = useQuery(ACTIVE_CUSTOMER_QUERY);
    const [logoutMutation] = useMutation(LOGOUT_MUTATION);
    const activeCustomer = data?.activeCustomer;
    const setUserData = async () => {
        setUser((): UserProps => {
            return {
                id: activeCustomer?.id,
                firstName: activeCustomer?.firstName,
                lastName: activeCustomer?.lastName,
                emailAddress: activeCustomer?.emailAddress,
                __typename: activeCustomer?.__typename
            };
        })
        navigate('/');
    };
    const logout = async () => {
        await logoutMutation();
        setUser(null);
        navigate('/');
    };


    return (
        <AuthContext.Provider value={{user, setUserData, logout}}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;

