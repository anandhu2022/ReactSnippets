import {AuthProviderProps, UserProps} from "../../libraries/utils/types.ts";
import {FC, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./useAuth.tsx";
import {useMutation, useQuery} from "@apollo/client";
import {ACTIVE_CUSTOMER_QUERY} from "../../api/schemas/query.ts";
import {LOGOUT_MUTATION} from "../../api/schemas/mutation.ts";


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const navigate = useNavigate();
    const {data, refetch} = useQuery(ACTIVE_CUSTOMER_QUERY);
    console.log(data);
    const [logoutMutation] = useMutation(LOGOUT_MUTATION);

    useEffect(() => {
        if (data?.activeCustomer) {
            setUser((): UserProps => {
                return {
                    id: data?.activeCustomer?.id,
                    firstName: data?.activeCustomer?.firstName,
                    lastName: data?.activeCustomer?.lastName,
                    emailAddress: data?.activeCustomer?.emailAddress,
                    __typename: data?.activeCustomer?.__typename
                };
            });
        } else {
            setUser(null);
        }
    }, [data]);

    const refetchUser = async () => {
        try {
            await refetch();
        } catch (e) {
            console.error(e);
        }
    }

    const logout = async () => {
        await logoutMutation();
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{user, refetchUser, logout}}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;

